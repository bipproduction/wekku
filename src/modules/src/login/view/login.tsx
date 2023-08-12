'use client'
import { Button, Center, Group, Loader, Stack, TextInput, Title } from "@mantine/core";
import { useShallowEffect } from "@mantine/hooks";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { kirimKode } from "../fun/kirim_kode";
import { setCookies } from "@/modules/glb";

export default function ViewLogin() {
    const [phoneState, setPhoneState] = useState("")
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const [isClient, setIsclient] = useState(false)

    async function kirimNomer() {
        setLoading(true)
        const id = await kirimKode("62" + phoneState)
        setLoading(false)
        router.replace(`/login/62${phoneState}`)
    }

    useShallowEffect(() => {
        if (window) return setIsclient(true)
    }, [])

    if (!isClient) return <><Center><Loader /></Center></>

    return (<>
       
        <Group position="center">
            <Stack>
                <Title>Login</Title>
                <TextInput value={phoneState} onChange={(val) => setPhoneState(val.currentTarget.value)} icon={"+62"} label={"phone"} placeholder="8xxxx" />
                <Button loading={loading} onClick={kirimNomer} >kirim</Button>
            </Stack>

        </Group>
    </>)
}