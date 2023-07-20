

import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'


export function GET() {

    cookies().set({
        name: 'session',
        value: '',
        maxAge: 0,
        // expires: new Date(Date.now() + 60 * 60 * 24 * 7),
        path: '/',
    })

    return NextResponse.json({
        isLoggedIn: false,
    })
}
