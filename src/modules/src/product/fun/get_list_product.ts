'use server'

import funGetUser from "@/lib/get_user"
import { listProduct } from "./list_product"

export async function getListProduct() {
    const user = await funGetUser()
    return await listProduct(user!.id as string)
}