
'use client'
import { useShallowEffect } from '@mantine/hooks'
import { getListProduct } from '../fun/get_list_product'
import { useState } from 'react'
import { ViewCreateProductButton } from './create_product_button'
import { valUser } from '@/lib/user'
import { useHookstate } from '@hookstate/core'

export function ViewProduct() {

    const [listProduct, setListProduct] = useState<any[]>([])
    const user = useHookstate(valUser)
    useShallowEffect(() => {
        loadListProduct()
    }, [])

    async function loadListProduct() {
        const p = await getListProduct()
        setListProduct(p)
    }
    return <>
       {JSON.stringify(user.value)}
    </>
}