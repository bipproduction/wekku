'use server'

import { prisma } from "@/lib/db"

export async function funGetProductStore(productId: string){
    return prisma.product.findUnique({
        where: {
            id: productId,
        }
        , select: {
            name: true,
            id: true,
            categoryId: true,
            des: true,
            img: true,
            price: true,
            stock: true,
        }
    })
}