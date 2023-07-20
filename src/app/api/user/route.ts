
import { sealData, unsealData } from 'iron-session/edge'
import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export type User = {
    isLoggedIn: boolean
    login: string
    avatarUrl: string,
    token?: string,
    refershToken?: string
}

export async function GET(req: NextRequest) {

    const k = cookies().get('session')?.value

    if (k === undefined) return NextResponse.json({
        isLoggedIn: false
    })

    const data = await unsealData(k as string, {
        password: process.env.PASSWORD as string
    })

    return NextResponse.json(
        k
        , {
            status: 200,
        })
}
