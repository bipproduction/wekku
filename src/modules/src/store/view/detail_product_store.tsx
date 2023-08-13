'use client'
import { funGetImgUrl, valImgUrl } from "@/lib"
import { ActionIcon, Box, Button, Center, Flex, Group, Image, Paper, Stack, Text, Title } from "@mantine/core"
import Link from "next/link"
import { useState } from "react"
import { MdAdd, MdArrowBackIos, MdClose, MdMinimize, MdRemove } from "react-icons/md"

export function ViewDetailProductStore({ product, user, imgUrl }: { product: any, user: any, imgUrl: string }) {
    const [stock, setStock] = useState(1)

    return <>
        <Stack>
            <Box p={"sm"}>
                <Link href={`/store/${user.phone}`}>
                    <MdArrowBackIos size={24} />
                </Link>
            </Box>
            <Stack w={"100%"} align="center">
                <Box maw={720} >
                    <Paper shadow="xs" p={"md"}>
                        <Stack w={"100%"} >
                            <Group align="start" >
                                <Box w={260}>
                                    <Image w={"100%"} src={`${imgUrl}/${product.img}`} alt="" />
                                </Box>
                                <Box px={"md"} maw={400} pos={"static"}>
                                    <Stack >
                                        <Text mah={100} lineClamp={2} fw={"bold"} size={24}>xxxxxxxxxxxdsdsdsdsds dsdsdsdsdsdsdsdsd sdsdsdsxxxxxxxxdsdsddsdsds{product.name}</Text>
                                        <Text size={32}>Rp{Intl.NumberFormat("id-ID").format(product.price)}</Text>
                                        <Stack>
                                            <Flex gap={"md"}>
                                                <Text>Qty</Text>
                                                <Paper withBorder>
                                                    <Flex>
                                                        <ActionIcon onClick={() => {
                                                            if (stock > 1) setStock((stock - 1))
                                                        }}>
                                                            <MdRemove />
                                                        </ActionIcon>
                                                        <Text px={"lg"}>{stock}</Text>
                                                        <ActionIcon onClick={() => {
                                                            if (stock < product.stock) setStock(stock + 1)
                                                        }}>
                                                            <MdAdd />
                                                        </ActionIcon>

                                                    </Flex>
                                                </Paper>
                                            </Flex>
                                            <Flex gap={"lg"}> <Text>Tersisa</Text> <Text>{product.stock}</Text></Flex>
                                        </Stack>
                                        <Button variant="outline">Masukkan Keranajang</Button>
                                    </Stack>
                                </Box>
                            </Group>

                        </Stack>
                    </Paper>
                </Box>
            </Stack>
        </Stack>
    </>
}