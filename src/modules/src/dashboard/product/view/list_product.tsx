import { useHookstate } from "@hookstate/core"
import { useShallowEffect } from "@mantine/hooks"
import { funGetListProduct } from "../fun/get_list_product"
import { Box, Center, Flex, Group, Image, Loader, Paper, SimpleGrid, Stack, Text } from "@mantine/core"
import { useState } from "react"
import { valImgUrl } from "@/lib"

export default function ViewListProduct() {

    const [listProduct, setListProduct] = useState<any[] | null>(null)

    useShallowEffect(() => {
        loadListProduct()
    }, [])

    async function loadListProduct() {
        const p = await funGetListProduct()

        console.log(p)
        setListProduct(p)
    }


    return <>
        <Center>
            <Stack maw={720} justify="center" align="center">
                <Flex p={"md"} wrap={"wrap"} gap={"xs"} >
                    {listProduct?.map((v, i) => <Paper shadow="sm" h={200} w={150} bg={"gray.0"} key={i}>
                        <Stack spacing={0}>
                            <Image radius={2} height={100} src={`${valImgUrl.value}/${v.img}?w=100`} alt="" />
                            <Stack spacing={'md'} p={"xs"}>
                                <Text h={40} lineClamp={2} fz={14}>{v.name}</Text>
                                <Flex justify={"space-between"}>
                                    <Text fz={14}>Rp {v.price}</Text>
                                    <Text fz={12}>{v.stock}</Text>
                                </Flex>
                            </Stack>
                        </Stack>
                    </Paper>)}
                </Flex>
            </Stack>
        </Center>
    </>
}