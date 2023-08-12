'use server'
import cookies from 'cookies'
import { redirect } from 'next/navigation'

export default async function logOut() {
    redirect('/login')
}