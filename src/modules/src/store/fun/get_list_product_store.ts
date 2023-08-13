'use server'

import { prisma } from "@/lib/db"

export async function funGetProductStore({ storeId }: { storeId: string }) {
    return prisma.product.findMany({
        where: {
            userId: storeId,
            isActive: true
        },
        select: {
            id: true,
            name: true,
            price: true,
            stock: true,
            img: true
        }
    })

}