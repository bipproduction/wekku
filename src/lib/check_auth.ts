import { cookies } from 'next/headers'
export async function checkHasLoggedIn() {
    const data = cookies().get("session")?.value

    const isCookie = data !== undefined && data !== ''

    return isCookie
}