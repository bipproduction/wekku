'use client'
import { useShallowEffect } from "@mantine/hooks"
import { funFindUser } from "./find_user"
import { valUser } from "./user"

export function ViewLoadUser() {
    useShallowEffect(() => {
        funFindUser()
    }, [])
    return <></>
}