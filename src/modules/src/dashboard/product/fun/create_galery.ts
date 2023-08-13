'use server'
import { prisma } from "@/lib/db";

export async function createGalery(data: any) {
    await prisma.galery.create({
        data: {
            id: data.id,
            imgId: data.id,
            name: data.name,
            ext: data.ext,
            userId: data.userId
        }
    })
}