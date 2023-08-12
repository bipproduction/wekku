'use server'

import { prisma } from "@/lib/db"
import _ from "lodash"
import { cookies } from 'next/headers'
import { sealData } from 'iron-session/edge'

export async function simpanDetailUser({ data, phone }: { data: any, phone: string }) {
    if (!phone || _.isEmpty(phone)) {
        console.log("null phone")
        return false
    }
    try {
        console.log(`simpan name ${data.name}`, phone)
        const user = await prisma.user.upsert({
            where: {
                phone: phone
            },
            create: {
                name: data.name
            },
            update: {
                name: data.name
            }
        })

        await prisma.userMerchant.upsert({
            where: {
                userId: user.id
            },
            create: {
                address: data.address,
                businessName: data.businessName,
                userId: user.id
            },
            update: {
                address: data.address,
                businessName: data.businessName,
            }
        })

        console.log("berhasil simpan detail")
        return true
    } catch (error) {
        console.log(error)
        return false
    }


}