import { prisma } from "@/lib/db"
import { cookies } from 'next/headers'

export default async function Page() {

    const db = await prisma.user.findMany()
    // if (_.isEmpty(db)) redirect('/login')

    return <>
        Profile
        {JSON.stringify(cookies().get("session"))}
    </>

}