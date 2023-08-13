'use client'
import { useShallowEffect } from "@mantine/hooks";
import { funGetImgUrl } from "../fun/get_img_url";
import { valImgUrl } from "../val/img_url";


export default function ViewLoadImgUrl() {
    useShallowEffect(() => {
        funGetImgUrl().then(v => valImgUrl.set(v ?? null))
    }, [])

    return (<></>)
}