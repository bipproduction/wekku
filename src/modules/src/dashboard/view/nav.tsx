import { Paper, UnstyledButton } from "@mantine/core";
import Link from "next/link";

export default function Nav() {
    return (<Paper top={50} w={250} bg={"gray"} h={"100vh"} pos={"fixed"} left={0} style={{
        zIndex: 10
    }}>
        <Link href={"/dashboard/create-product"}>
            <UnstyledButton>
                Create Product
            </UnstyledButton>
        </Link>
    </Paper>)
}