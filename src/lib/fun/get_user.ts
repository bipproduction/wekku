'use server'
import { unsealData } from 'iron-session'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { prisma } from '../db'
import _ from 'lodash'
export default async function funGetUser() {
    const userData = cookies().get('token')
    const user = !userData ? null : await unsealData(userData.value, { password: process.env.PASSWORD as string })
    if (!user) redirect('/login')

    const usr = await prisma.user.findUnique({
        where: {
            id: user.id as string
        },
        select: {
            id: true,
            name: true,
            phone: true,
            UserMerchant: {
                select: {
                    businessName: true,
                    address: true
                }
            }
        }
    })

    console.log(usr)
    return user
}