import { NextRequest, NextResponse } from "next/server";
import setCookies from "../fun/set_cookies";

export async function funLogin(req: NextRequest) {
    const body = await req.json()
    await setCookies(body)

    return NextResponse.json({
        status: 'success',
        success: true
    })
}   