import { prisma } from "@/lib/db"
import { RegisterView } from "@/modules/src/register"

import { redirect } from "next/navigation"

export default async function RegisterPage({ params }: { params: { phone: string } }) {
    
    const user = await prisma.user.findUnique({
        where: {
            phone: `${params.phone}`
        }
    })

    if (!user) return redirect("/login")
    return <>
        <RegisterView phone={params.phone} />
    </>
}