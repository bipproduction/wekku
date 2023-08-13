import { Box, Button, Center, Group, Image, Loader, Modal, NumberInput, Select, Stack, Text, TextInput, Textarea, Title } from '@mantine/core';
import { Dropzone, IMAGE_MIME_TYPE, FileWithPath } from '@mantine/dropzone';
import { useState } from 'react';
import { MdImage, MdImageSearch } from 'react-icons/md'
import ViewModalCreateCategory from './model_create_category';
import { valImgUrl } from '@/lib';


export default function ViewUploadImg({ value, onChange }: { value?: string, onChange: (val: any) => void }) {
    const [gambar, setGambar] = useState<string>()
    const [isLoading, setIsloading] = useState(false)
    const [nama, setNama] = useState("")
    return <>
        <Group position='center'>
            <Stack w={300}>
                <Dropzone accept={IMAGE_MIME_TYPE} onDrop={async (file) => {
                    setIsloading(true)
                    const bf = Buffer.from(await file[0].arrayBuffer())
                    const blob = new Blob([bf], { type: "image/png" })
                    // const imageUrl = URL.createObjectURL(blob)

                    const fd = new FormData()
                    fd.append('file', file[0])

                    const kirim = await fetch('https://str.wibudev.com/api/file/upl', {
                        method: "POST",
                        body: fd,
                    },)

                    const hasil = await kirim.json()
                    const url = `https://str.wibudev.com/api/file/get/${hasil.data.id}.${hasil.data.ext}`
                    setGambar(url)
                    setNama(hasil.data.name)
                    setIsloading(false)
                    onChange(hasil.data)

                }}>
                    <Center h={200}>
                        {isLoading ? <Loader /> : value ? <Image bg={"gray"} w={200} h={200} src={`${valImgUrl.value}/${value}`} alt='gambar' /> : <MdImageSearch size={52} color='grey' />}

                    </Center>
                </Dropzone>
                <Text>{value ? nama : ""}</Text>

            </Stack>

        </Group>
    </>
}