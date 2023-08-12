'use client'
import { Button } from "@mantine/core";
import { useRouter } from 'next/navigation'
import toast from "react-simple-toasts";

export function LogoutButton() {
    const router = useRouter()
    function logout() {
        fetch('/api/logout').then((res) => {
            if (res.status === 200) {
                toast('success')
                router.replace('/login')
            }
        })
    }
    return (
        <Button onClick={logout}>Logout</Button>
    )
}