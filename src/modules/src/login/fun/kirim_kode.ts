'use server'

import { prisma } from "@/lib/db"
import _ from "lodash"

export async function kirimKode(phone: string) {
    const kode = [_.random(0, 9), _.random(0, 9), _.random(0, 9), _.random(0, 9)].join("")
    const simpan = await prisma.otp.upsert({
        where: {
            id: phone
        },
        create: {
            id: phone,
            phone: phone,
            menit: (new Date()).getMinutes(),
            code: kode
        },
        update: {
            code: kode,
            menit: (new Date()).getMinutes()
        }
    })

    console.log(`kirim ke ${phone}`)
    await fetch(process.env.WA_URL + `/code?nom=${phone}&text=${kode}`)

    return simpan.id
}