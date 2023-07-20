import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { sealData } from 'iron-session/edge'

export async function POST() {

    const data = await sealData(JSON.stringify({
        isLoggedIn: true,
        id: 1,
        name: "malik",
        email: "malik@gmail"
    }), {
        password: process.env.PASSWORD as string
    })

    console.log(data)

    cookies().set({
        name: "session",
        value: data,
        maxAge: 60 * 60 * 24 * 7
    })

    return NextResponse.json({
        status: "success",
        isLoggedIn: true
    },
        {
            status: 201
        }
    )
}

