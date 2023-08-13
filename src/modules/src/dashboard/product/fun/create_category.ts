'use server'

import { prisma } from "@/lib/db";

export async function funCreateCategory(name: string) {

    try {
        const cat = await prisma.category.create({
            data: {
                name: name,
                // userId: userId
            }
        })

        return true
    } catch (error) {
        return false
    }
}