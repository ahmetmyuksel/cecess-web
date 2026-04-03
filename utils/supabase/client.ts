import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!url || url === 'https://mock.supabase.co') {
        console.warn('Supabase Client: NEXT_PUBLIC_SUPABASE_URL is missing or using mock. Use NEXT_PUBLIC_ prefix for client-side variables.');
    }

    return createBrowserClient(
        url || 'https://mock.supabase.co',
        anonKey || 'mock-key'
    )
}
