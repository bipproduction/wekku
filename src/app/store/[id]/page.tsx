
import { checkHasLoggedIn } from "@/lib/fun/check_auth"
import { prisma } from "@/lib/db"
import { LogoutButton } from "@/modules/src/logout"
import { cookies } from 'next/headers'
import { redirect } from "next/navigation"
import { Title } from "@mantine/core"
import { ViewStore } from "@/modules"
import _ from "lodash"


export default async function Page({ params }: { params: { id: string } }) {

    const user: any = await prisma.user.findUnique({
        where: {
            phone: params.id
        },
        select: {
            id: true,
            phone: true,
            name: true,
            UserMerchant: {
                select: {
                    address: true,
                    businessName: true,
                }
            }
        }
    })

    try {
        user.address = user?.UserMerchant?.address
        user.businessName = user?.UserMerchant?.businessName
    } catch (error) {
        console.log(error)
    }

    if (!user) return <>user belum ditemukan</>

    return (<div>

        <ViewStore store={user} />
    </div>)
}