'use client'
import { useShallowEffect } from "@mantine/hooks"
import { funFindUser } from "../fun/find_user"
import { valUser } from "../val/user"

export function ViewLoadUser() {
    useShallowEffect(() => {
        funFindUser()
    }, [])
    return <></>
}