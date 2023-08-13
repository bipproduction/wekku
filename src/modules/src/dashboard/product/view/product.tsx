
'use client'
import { useShallowEffect } from '@mantine/hooks'
import { funGetListProduct } from '../fun/get_list_product'
import { useState } from 'react'
import { ViewCreateProductButton } from './create_product_button'
import { valUser } from '@/lib/val/user'
import { useHookstate } from '@hookstate/core'
import ViewListProduct from './list_product'

export function ViewProduct() {

    const [listProduct, setListProduct] = useState<any[]>([])
    const user = useHookstate(valUser)
    useShallowEffect(() => {
        loadListProduct()
    }, [])

    async function loadListProduct() {
        const p = await funGetListProduct()
        setListProduct(p)
    }
    return <>

        <ViewListProduct />
    </>
}