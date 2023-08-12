import { ViewLogin } from "@/modules/login";
import { unsealData } from "iron-session";
import { cookies } from "next/headers";


export default async function PageLogin() {
   

    return <>
        <ViewLogin />
    </>
}