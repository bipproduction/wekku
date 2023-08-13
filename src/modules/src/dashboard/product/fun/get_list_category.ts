'use server'
import { unsealData } from "iron-session"
import { cookies } from 'next/headers'
import { funGetDataCategory } from "./get_data_category"

export async function funGetCategory() {
    const user = await unsealData(cookies().get('token')!.value, { password: process.env.PASSWORD! })
    const data = await funGetDataCategory(user.id)
    return data
}

