'use client'
import funGetUser from "./get_user"
import { valUser } from "./user"

export async function funFindUser() {
    const user = await funGetUser()
    valUser.set(user)
}