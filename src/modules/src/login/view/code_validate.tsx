'use client'
import { Flex, Group, PinInput, Stack, Text, Title, UnstyledButton } from "@mantine/core";
import { useInterval, useShallowEffect } from "@mantine/hooks";
import { useAtom } from "jotai";
import _ from "lodash";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-simple-toasts";
import { funUserValidation } from "../fun/user_validation";
import { valPercobaan } from "../val/percobaan";

let hitung = 60
let pointer = 60

export default function CodeValidate({ phone }: { phone: string }) {

    const [waktu, setWaktu] = useState(hitung)
    const interval = useInterval(() => {
        if (pointer <= 0) return stop
        pointer--;
        setWaktu(pointer)
    }, 1000)


    const [percobaan, setPercobaan] = useAtom(valPercobaan)
    const [inputCode, setInputCode] = useState("")
    const router = useRouter()

    useShallowEffect(() => {
        interval.start()
        if (pointer <= 0) {
            interval.stop()
        }
        return interval.stop
    }, [])

    return <>
        <Group position="center">
            <Stack align="center" justify="center">

                <Title>Cocokkan Kode {percobaan}</Title>
                <Text>Kami Telah Mengirimpan Code ke Whatsapp +{phone}</Text>
                <Flex>
                    {waktu <= 0 ? <UnstyledButton onClick={() => router.replace('/login')} c={"blue"}>Kirim Ulang</UnstyledButton> : <Text px={"md"}>Kirim Ulang: {waktu}</Text>}
                </Flex>
                <PinInput value={inputCode} onChange={async (val) => {
                    setInputCode(val)
                    if (val.length === 4) {
                        const apa = await funUserValidation(phone, val)
                        if (!apa.success) {
                            setInputCode("")
                            let p = _.cloneDeep(percobaan)
                            p--;

                            setPercobaan(p)
                            return toast(apa.message)

                        }

                        toast("success")
                        interval.stop()
                        if (apa.status === "login") return router.replace(`/dashboard/${phone}`)
                        if (apa.status === "register") return router.replace(`/register/${phone}`)

                    }
                }} size="lg" />
            </Stack>
        </Group>
    </>
}