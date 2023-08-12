import { Box, Button, Center, Group, Image, Loader, Modal, NumberInput, Select, Stack, Text, TextInput, Textarea, Title } from '@mantine/core';
import { Dropzone, IMAGE_MIME_TYPE, FileWithPath } from '@mantine/dropzone';
import { useState } from 'react';
import { MdImage } from 'react-icons/md'
import ViewModalCreateCategory from './model_create_category';


export default function ViewDrop({ onChange }: { onChange: (val: any) => void }) {
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
                    const imageUrl = URL.createObjectURL(blob)

                    const fd = new FormData()
                    fd.append('file', file[0])

                    const kirim = await fetch('https://str.wibudev.com/api/file/upl', {
                        method: "POST",
                        body: fd,
                    },)

                    const hasil = await kirim.json()
                    console.log(hasil)
                    const url = `https://str.wibudev.com/api/file/get/${hasil.data.id}.${hasil.data.ext}`

                    console.log(url)
                    setGambar(url)
                    setNama(hasil.data.name)
                    setIsloading(false)
                    onChange(hasil.data.name)

                }}>
                    <Center h={200}>
                        {isLoading ? <Loader /> : gambar ? <Image bg={"gray"} w={200} h={200} src={gambar} /> : <MdImage size={52} color='grey' />}

                    </Center>
                </Dropzone>
                <Text>{nama}</Text>

            </Stack>

        </Group>
    </>
}