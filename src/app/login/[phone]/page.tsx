import { CodeValidate } from "@/modules";

export default function PageLoginPhone({ params }: { params: { phone: string } }) {
    return (<>
       
        <CodeValidate phone={params.phone} />
    </>)
}