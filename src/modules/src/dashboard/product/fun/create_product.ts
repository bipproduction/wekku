'use server'
import { prisma } from "@/lib/db"
import funGetUser from '@/lib/fun/get_user'

export default async function funCreateProduct(data: any) {
   
    const user = await funGetUser()
    await prisma.product.create({
        data: {
            img: data.img,
            name: data.name,
            price: data.price,
            stock: data.stock,
            categoryId: data.categoryId,
            des: data.des,
            userId: user!.id as string
        }
    })

    return true
}