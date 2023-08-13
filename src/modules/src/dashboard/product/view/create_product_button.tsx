import { UnstyledButton } from "@mantine/core";
import Link from "next/link";

export function ViewCreateProductButton() {

    return <>
        <Link href={'/dashboard/create-product'}>
            <UnstyledButton c={"blue"}>Create Product</UnstyledButton>
        </Link>

    </>
}