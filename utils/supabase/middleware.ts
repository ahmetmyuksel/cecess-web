import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function updateSession(request: NextRequest) {
    let response = NextResponse.next({
        request: {
            headers: request.headers,
        },
    })

    // Security headers
    response.headers.set('X-Content-Type-Options', 'nosniff')
    response.headers.set('X-Frame-Options', 'DENY')
    response.headers.set('X-XSS-Protection', '1; mode=block')
    response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
    response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()')
    if (process.env.NODE_ENV === 'production') {
        response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains')
    }

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
                    // Re-apply security headers after response recreation
                    response.headers.set('X-Content-Type-Options', 'nosniff')
                    response.headers.set('X-Frame-Options', 'DENY')
                    response.headers.set('X-XSS-Protection', '1; mode=block')
                    response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
                    response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()')
                    if (process.env.NODE_ENV === 'production') {
                        response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains')
                    }

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

    const { data: { user } } = await supabase.auth.getUser()

    // Protected Routes
    if (request.nextUrl.pathname.startsWith('/profile') && !user) {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    // Auth Routes (Redirect to dashboard if already logged in)
    if ((request.nextUrl.pathname.startsWith('/login') || request.nextUrl.pathname.startsWith('/signup')) && user) {
        return NextResponse.redirect(new URL('/profile/dashboard', request.url))
    }

    return response
}
