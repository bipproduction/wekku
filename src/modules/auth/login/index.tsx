'use client'
import { Button, Center, Group, Paper, PasswordInput, Stack, TextInput, Title } from "@mantine/core"
import { useRouter } from "next/navigation"
import { useState } from "react"

export function LoginView() {

    const route = useRouter()
    const [body, setBody] = useState({
        email: "",
        password: ""
    })

    return (
        <Center h={"100vh"}>
            <Group align='center' >
                <Stack>

                    <Title color='gray'>Login</Title>
                    <Paper bg={"gray.6"} shadow='sm' p={"xl"}>
                        <Stack p={"xs"} spacing={"lg"}>
                            <TextInput value={body.email} placeholder='email' label="email" onChange={(val => val && setBody({
                                ...body,
                                email: val.currentTarget.value
                            }))} />
                            <PasswordInput value={body.password} placeholder='password' label="password" onChange={val => val && setBody({
                                ...body,
                                password: val.currentTarget.value
                            })} />
                            <Button onClick={() => {
                                fetch('/api/login', {
                                    method: "POST",
                                    headers: { 'Content-Type': "application/json" },
                                    body: JSON.stringify(body)
                                }).then(async (val) => {
                                    const data = await val.json()
                                    if (data.status === "success") {
                                        return route.push('/customer/apa')
                                    }
                                }).catch((e) => {
                                    console.log(e)
                                })
                            }}>LOGIN</Button>
                        </Stack>
                    </Paper>

                </Stack>
            </Group>
        </Center>
    )
}