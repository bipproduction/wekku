'use server'

import { sealData } from 'iron-session'
import { cookies } from 'next/headers'
export default async function setCookies(data: {} | any) {
    try {
        const value = await sealData(data, { password: process.env.PASSWORD as string })
        cookies().set({
            name: "token",
            value
        })

        return true

    } catch (error) {
        console.error("#%d", error)
        return false
    }
}