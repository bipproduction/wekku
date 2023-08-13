'use client'

import { valUser } from "@/lib/val/user";
import { useHookstate } from "@hookstate/core";
import { ActionIcon, Button, Flex, Group, NumberInput, Select, Stack, TextInput, Textarea, Title } from "@mantine/core";
import { useShallowEffect } from "@mantine/hooks";
import _ from "lodash";
import { useState } from "react";
import { MdAddBox } from "react-icons/md";
import toast, { toastConfig } from "react-simple-toasts";
import { createGalery } from "../fun/create_galery";
import funCreateProduct from "../fun/create_product";
import { funGetCategory } from "../fun/get_list_category";
import ViewModalCreateCategory from "./model_create_category";
import ViewUploadImg from "./view_upload_img";

toastConfig({
    theme: "dark"
})

export const revalidate = 0
export default function ViewAddProduct() {

    const [isCreate, setIscreate] = useState(false)
    const [lsCat, setLsCat] = useState<any[]>([])
    const [isLoading, setisloading] = useState(false)
    const user = useHookstate(valUser)

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
        if (_.values(dataVal).includes('')) {
            console.log(dataVal)
            setisloading(false)
            return toast("isi semua datanya")
        }
        const res = await funCreateProduct(dataVal)

        if (res) {
            setisloading(false)

            const d: any = _.clone(dataVal)
            _.keys(d).forEach((v: any) => {
                d[v] = ''
            })

            setDataVal(d)
            return toast("success")
        }

        setisloading(false)

        return toast("error")
    }

    return <>
        <Group position="center" p={"md"} >
            <Stack>
                {/* <Group >
                    <Link href={'/dashboard'}>
                        <ActionIcon>
                            <MdArrowBackIos size={52} />
                        </ActionIcon>
                    </Link>
                </Group> */}
                <Title>Add Product</Title>
                <ViewUploadImg value={dataVal.img} onChange={async (val) => {
                    const data = {
                        id: val.id,
                        name: val.name,
                        ext: val.ext,
                        imgId: val.id,
                        userId: user.value.id
                    }
                    await createGalery(data)
                    setDataVal({
                        ...dataVal,
                        img: val.id + "." + val.ext
                    })
                }} />
                {_.isEmpty(dataVal.img) ? null : <Stack>
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
                    <TextInput value={dataVal.name} placeholder="eg: bawang merah" label='title' onChange={(val) => {
                        setDataVal({
                            ...dataVal,
                            name: val.currentTarget.value
                        })
                    }} />
                    <Textarea value={dataVal.des} placeholder="eg: ini adalah ..." minRows={8} label='description' onChange={(val) => [
                        setDataVal({
                            ...dataVal,
                            des: val.currentTarget.value
                        })
                    ]} />
                    <NumberInput value={dataVal.price} placeholder="eg: 50000" label='price' onChange={val => {
                        setDataVal({
                            ...dataVal,
                            price: val,
                        })
                    }} />
                    <NumberInput value={dataVal.stock} placeholder="eg: 80" label='stock' onChange={val => {
                        setDataVal({
                            ...dataVal,
                            stock: val
                        })
                    }} />
                    <Button loading={isLoading} onClick={onSave}>Save</Button>
                    <ViewModalCreateCategory opened={isCreate} onClose={onClose} />
                </Stack>}
            </Stack>
        </Group>
    </>
}