import funGetUser from "@/lib/fun/get_user";
import { ViewDetailProductStore, funGetProductStore } from "@/modules/src/store";
import { NextRequest } from "next/server";
import { URL } from "url";


export default async function Page({ params, searchParams }: { params: { name: string, id: string }, searchParams: { id: string } }) {
    const p = await funGetProductStore(searchParams.id)
    const user = await funGetUser()
    const imgUrl = process.env.IMG_URL as string
    return (<>
        <ViewDetailProductStore imgUrl={imgUrl} product={p} user={user} />
    </>)
}