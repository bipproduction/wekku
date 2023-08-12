import funGetUser from "@/lib/get_user"
import { ViewLoadUser } from "@/lib/load_user"


export default async function LayoutDashboard({ children }: { children: any }) {
    // memastikan user telah login, jika belum maka akan dilempar ke login
    const user = await funGetUser()

    return <>

        <ViewLoadUser />
        {children}
    </>
}