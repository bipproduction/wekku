import { ViewProduct } from "@/modules"


export default async function Page({ params }: { params: { phone: string } }) {


    return (
        <div >
            <ViewProduct />
        </div>
    )
}