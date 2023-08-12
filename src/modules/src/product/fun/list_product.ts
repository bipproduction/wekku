import { prisma } from "@/lib/db";

export async function listProduct(userId: string) {
   return prisma.product.findMany({
        where: {
            userId: userId,
            isActive: true
        }
    })
}