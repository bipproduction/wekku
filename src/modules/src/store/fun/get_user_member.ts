'use server'
import { unsealData } from 'iron-session'
import { cookies } from 'next/headers'
export async function funGetUserMember() {
    const usr = cookies().get("user_member")
    if (!usr) return null
    const user = await unsealData(usr.value, { password: process.env.PASSWORD as string })
    return user
}