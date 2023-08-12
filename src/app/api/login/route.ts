import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { sealData } from 'iron-session/edge'
import { funLogin } from '@/modules/glb/api/login'



export async function POST(req: NextRequest) {

    cookies().set({
        name: "token",
        value: ""
    })

    return NextResponse.json({
        success: true
    })

    // const data = await sealData(JSON.stringify({
    //     isLoggedIn: true,
    //     id: 1,
    //     name: "malik",
    //     email: "malik@gmail"
    // }), {
    //     password: process.env.PASSWORD as string
    // })

    // console.log(data)

    // cookies().set({
    //     name: "session",
    //     value: data,
    //     maxAge: 60 * 60 * 24 * 7
    // })

    // return NextResponse.json({
    //     status: "success",
    //     isLoggedIn: true
    // },
    //     {
    //         status: 201
    //     }
    // )
}

