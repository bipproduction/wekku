'use client'

import { Button, Group, Stack, Text, TextInput, Title } from "@mantine/core"
import { useState } from "react"
import { simpanDetailUser } from "../fun/simpan_detail_user"
import _ from "lodash"
import toast from "react-simple-toasts"
import { useRouter } from "next/navigation"

export default function RegisterView({ phone }: { phone: string }) {
    const [formValue, setFormValue] = useState({
        name: "",
        businessName: "",
        address: ""
    })

    const router = useRouter()

    async function simpanData() {
        const simpan = await simpanDetailUser({
            data: formValue,
            phone: phone
        })

        if (_.values(formValue).includes("")) return toast("isi semuanya dengan lengkap")
        if (simpan) return router.replace(`/dashboard/${phone}`)
        return toast("error")
    }

    return (<Group position="center" >
        <Stack maw={560}>
            <Title>Register</Title>
            <Text>{phone}</Text>
            {JSON.stringify(formValue)}
            <TextInput value={formValue.name} onChange={(val) => setFormValue({
                ...formValue,
                name: val.currentTarget.value
            })} label={"Nama"} placeholder="mukidi XXX" />
            <TextInput value={formValue.businessName} onChange={(val) => setFormValue({
                ...formValue,
                businessName: val.currentTarget.value
            })} label={"Nama Usaha"} placeholder="sumber XXX" />
            <TextInput value={formValue.address} onChange={val => setFormValue({
                ...formValue,
                address: val.currentTarget.value
            })} label={"alamat"} placeholder="jalan XXX" />
            <Button onClick={simpanData} >Simpan</Button>
        </Stack>
    </Group>)
}