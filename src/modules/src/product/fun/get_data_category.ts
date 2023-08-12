import { prisma } from "@/lib/db";

export async function funGetDataCategory(user: any){
    const data = await prisma.category.findMany({
        where: {
            userId: user.id!,
            isActive: true
        },
        select: {
            id: true,
            name: true,
        }
    })

    return data
}