'use client'
import { Center, Flex, Group, Paper, Stack, Text, TextInput } from "@mantine/core";
import { MdSearch, MdWhatsapp } from "react-icons/md";
import { ViewListProductStore } from "./list_product_store";

export default function ViewStore({ store }: { store: any }) {

    return (<>
        <Center>
            <Stack maw={720}>

                <Paper p={"xs"}>
                    <Group>
                        <Stack spacing={0}>
                            <Text fw={"bold"}>{store.businessName}</Text>
                            <Flex>
                                <MdWhatsapp />
                                <Text fz={12}>{store.phone}</Text>
                            </Flex>
                        </Stack>
                        <TextInput icon={<MdSearch />} />
                    </Group>
                </Paper>
                <ViewListProductStore store={store} />
            </Stack>
        </Center>
    </>)
}