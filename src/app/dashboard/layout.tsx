import funGetUser from "@/lib/fun/get_user"
import { ViewLoadUser } from "@/lib/view/load_user"
import { ViewDashboard } from "@/modules"


export default async function LayoutDashboard({ children }: { children: any }) {
    // memastikan user telah login, jika belum maka akan dilempar ke login
    await funGetUser()

    return <>
        <ViewLoadUser />
        <ViewDashboard >
            {children}
        </ViewDashboard>
    </>
}