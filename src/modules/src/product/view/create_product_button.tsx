import funGetUser from "@/lib/get_user";
import { useHookstate } from "@hookstate/core";
import { Loader, Text, UnstyledButton } from "@mantine/core";

export function ViewCreateProductButton() {
    const user: any = useHookstate(funGetUser)
    if (user.promise) return <Loader />
    if (user.error) return <Text>Button error</Text>
    return <>
        {JSON.stringify(user.value)}
        
    </>
}