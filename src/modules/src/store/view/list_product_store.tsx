import { valImgUrl } from "@/lib";
import { Center, Flex, Image, Paper, Stack, Text, UnstyledButton } from "@mantine/core";
import { useShallowEffect } from "@mantine/hooks";
import { useState } from "react";
import { funGetProductStore } from "../fun/get_list_product_store";
import { valStoreId } from "../val/val_store_id";
import { useHookstate } from "@hookstate/core";
import Link from "next/link";

export function ViewListProductStore({ store}: { store: any}) {
    const [listProduct, setlistProduct] = useState<any[]>([])


    useShallowEffect(() => {
        loadListProduct()
    }, [])

    async function loadListProduct() {
        const d = await funGetProductStore({ storeId: store.id })
        setlistProduct(d)
    }
    return (<>
        <Center>
            <Stack maw={720} justify="center" align="center">
                <Flex p={"md"} wrap={"wrap"} gap={"xs"} >
                    {listProduct?.map((v, i) => <Paper shadow="sm" h={200} w={150} bg={"gray.0"} key={i}>
                        <Link href={`/store/${store.phone}/${v.name}?id=${v.id}`}>
                            <UnstyledButton>
                                <Stack spacing={0}>
                                    <Image radius={2} height={100} src={`${valImgUrl.value}/${v.img}?w=100`} alt="" />
                                    <Stack spacing={'md'} p={"xs"}>
                                        <Text h={40} lineClamp={2} fz={14}>{v.name}</Text>
                                        <Flex justify={"space-between"}>
                                            <Text fw={"bold"} c={"cyan"} fz={14}>Rp {Intl.NumberFormat("id-ID").format(v.price)}</Text>
                                            <Text fz={12}>{v.stock}</Text>
                                        </Flex>
                                    </Stack>
                                </Stack>
                            </UnstyledButton>
                        </Link>
                    </Paper>)}
                </Flex>
            </Stack>
        </Center>
    </>)
}