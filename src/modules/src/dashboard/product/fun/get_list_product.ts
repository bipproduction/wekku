'use server'
import funGetUser from "@/lib/fun/get_user"
import { listProduct } from "./list_product"

export async function funGetListProduct() {
    const user = await funGetUser()
    return await listProduct(user!.id as string)
}