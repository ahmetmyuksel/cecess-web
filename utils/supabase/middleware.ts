import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export const runtime = 'edge';

export async function updateSession(request: NextRequest) {
    let response = NextResponse.next({
        request: {
            headers: request.headers,
        },
    })

    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://mock.supabase.co',
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'mock-key',
        {
            cookies: {
                getAll() {
                    return request.cookies.getAll()
                },
                setAll(cookiesToSet) {
                    cookiesToSet.forEach(({ name, value, options }) =>
                        request.cookies.set({
                            name,
                            value,
                            ...options,
                        })
                    )
                    response = NextResponse.next({
                        request: {
                            headers: request.headers,
                        },
                    })
                    cookiesToSet.forEach(({ name, value, options }) =>
                        response.cookies.set({
                            name,
                            value,
                            ...options,
                        })
                    )
                },
            },
        }
    )

    const { data: { user }, error } = await supabase.auth.getUser()

    // Protected Routes Pattern
    if (request.nextUrl.pathname.startsWith('/profile') && !user) {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    // Auth Routes Pattern (Redirect to dashboard if already logged in)
    if ((request.nextUrl.pathname.startsWith('/login') || request.nextUrl.pathname.startsWith('/signup')) && user) {
        return NextResponse.redirect(new URL('/profile/dashboard', request.url))
    }

    // Root route handling - allow access to landing page even if logged in
    // if (request.nextUrl.pathname === '/' && user) {
    //     return NextResponse.redirect(new URL('/profile/dashboard', request.url))
    // }

    return response
}
