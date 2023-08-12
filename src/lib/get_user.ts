'use server'
import { unsealData } from 'iron-session'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
export default async function funGetUser() {
    const userData = cookies().get('token')
    const user = !userData ? null : await unsealData(userData.value, { password: process.env.PASSWORD as string })
    if (!user) redirect('/login')
    return user
}