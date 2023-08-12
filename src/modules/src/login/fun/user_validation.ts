'use server'

import { prisma } from "@/lib/db"
import _ from "lodash"
import { cookies } from 'next/headers'
import { sealData } from 'iron-session/edge'
import { setCookies } from "@/modules/glb"

export async function funUserValidation(phone: string, code: string) {

    console.log((new Date()).getMinutes())


    const c = await prisma.otp.findMany({
        where: {
            phone: phone,
            code: code
        }
    })

    if (_.isEmpty(c)) return {
        success: false,
        status: "wrong code",
        message: "code not match"
    }

    const user = await prisma.user.findUnique({
        where: {
            phone: phone
        },
        select: {
            id: true,
            phone: true
        }
    })

    if (!user) {
        const usr = await prisma.user.create({
            data: {
                phone: phone
            },
            select: {
                id: true,
                phone: true
            }
        })

       await setCookies(usr)
        return {
            success: true,
            status: "register",
            message: "user has no account"
        }
    }

    console.log("user sudah register")

    await setCookies(user)

    return {
        success: true,
        status: "login",
        message: "user has register"
    }

}