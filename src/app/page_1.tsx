'use client';
import { Text } from "@mantine/core";


export function Page1({data}: {data: any}) {
    return <>
        <Text>Ini Page 1</Text>


        {JSON.stringify(data)}
        {/* {JSON.stringify(cookies().getAll())} */}
    </>
}