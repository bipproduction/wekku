'use client'
import { Box, Burger, Flex, MediaQuery, Paper, Stack, Title } from "@mantine/core";
import { useState } from "react";
import Nav from "./nav";

export default function ViewDashboard({ children }: { children: any }) {
    const [openMenu, setOpenMenu] = useState(false)
    return (<>
        <Stack>
            <Paper w={"100%"} h={50} pos={"fixed"} bg={"gray.1"} style={{
                zIndex: 10
            }}>
                <Flex align={"center"}>
                    <MediaQuery largerThan={"sm"} styles={{ display: "none" }}>
                        <Burger opened={openMenu} onClick={() => setOpenMenu(!openMenu)} />
                    </MediaQuery>
                    <Title>Wekku</Title>
                </Flex>
            </Paper>
            <Flex>
                <MediaQuery smallerThan={"sm"} styles={{ display: openMenu ? "block" : "none" }}>
                    <Nav />
                </MediaQuery>
                <MediaQuery smallerThan={"sm"} styles={{
                    left: 0
                }}>
                    <Box pos={"relative"} left={250} top={50}>
                        {children}
                    </Box>
                </MediaQuery>
            </Flex>
        </Stack>
    </>)
}