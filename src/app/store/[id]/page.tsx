
import { checkHasLoggedIn } from "@/lib/check_auth"
import { prisma } from "@/lib/db"
import { CustomerView } from "@/modules"
import { LogoutButton } from "@/modules/src/logout"
import { cookies } from 'next/headers'
import { redirect } from "next/navigation"


export default async function Page({ params }: { params: { id: string } }) {

    const user = await prisma.user.findMany()

    if (!(await checkHasLoggedIn())) return redirect('/auth/login')

    return (<div>
        {params.id}
        <pre>
            {JSON.stringify(cookies().getAll(), null, 2)}
        </pre>

        <LogoutButton />
        <CustomerView />

    </div>)
}