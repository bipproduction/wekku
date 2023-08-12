'use client'

import { ActionIcon, Button, Flex, Group, NumberInput, Select, Stack, TextInput, Textarea, Title } from "@mantine/core";
import { useShallowEffect } from "@mantine/hooks";
import { useState } from "react";
import { funGetCategory } from "../fun/get_list_category";
import ViewModalCreateCategory from "./model_create_category";
import ViewDrop from "./view_drop";
import { MdAddBox } from "react-icons/md";
import _ from "lodash";
import toast, { toastConfig } from "react-simple-toasts";
import funCreateProduct from "../fun/create_product";

toastConfig({
    theme: "dark"
})

export const revalidate = 0
export default function ViewAddProduct() {

    const [isCreate, setIscreate] = useState(false)
    const [lsCat, setLsCat] = useState<any[]>([])
    const [isLoading, setisloading] = useState(false)

    const [dataVal, setDataVal] = useState({
        img: '',
        name: '',
        des: '',
        price: '' as any,
        categoryId: '',
        stock: '' as any
    })

    useShallowEffect(() => {
        loadCategory()

        if (isCreate) loadCategory()
    }, [isCreate])

    async function loadCategory() {
        const data = await funGetCategory()
        setLsCat(data)
    }

    function onClose() {
        setIscreate(false)
    }

    async function onSave() {
        setisloading(true)
        if (_.values(dataVal).includes('')) return toast("isi semua datanya")
        const res = await funCreateProduct(dataVal)

        if (res) {
            setisloading(false)
            return toast("success")
        }

        setisloading(false)
        return toast("error")
    }

    return <>
        <Group position="center" py={"lg"}>
            <Stack>

                <Title>Add Product</Title>
                <ViewDrop onChange={(val) => {
                    setDataVal({
                        ...dataVal,
                        img: val
                    })
                }} />
                <Stack>
                    {/* {JSON.stringify(dataVal)} */}
                    <Flex align={"end"} gap={"md"}>
                        <Select placeholder="select category" label={"category"} data={[...lsCat.map((v) => v.name)]} onChange={(val: any) => {
                            setDataVal({
                                ...dataVal,
                                categoryId: lsCat.find((v) => v.name === val).id
                            })
                        }} />
                        <ActionIcon onClick={() => {
                            setIscreate(true)
                        }}>
                            <MdAddBox size={72} />
                        </ActionIcon>

                    </Flex>
                    <TextInput placeholder="eg: bawang merah" label='title' onChange={(val) => {
                        setDataVal({
                            ...dataVal,
                            name: val.currentTarget.value
                        })
                    }} />
                    <Textarea placeholder="eg: ini adalah ..." minRows={8} label='description' onChange={(val) => [
                        setDataVal({
                            ...dataVal,
                            des: val.currentTarget.value
                        })
                    ]} />
                    <NumberInput placeholder="eg: 50000" label='price' onChange={val => {
                        setDataVal({
                            ...dataVal,
                            price: val,
                        })
                    }} />
                    <NumberInput placeholder="eg: 80" label='stock' onChange={val => {
                        setDataVal({
                            ...dataVal,
                            stock: val
                        })
                    }} />
                    <Button loading={isLoading} onClick={onSave}>Save</Button>
                    <ViewModalCreateCategory opened={isCreate} onClose={onClose} />
                </Stack>
            </Stack>
        </Group>
    </>
}