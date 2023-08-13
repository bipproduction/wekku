import { Button, Group, Modal, Stack, TextInput, Title } from "@mantine/core";
import { useState } from "react";
import { funCreateCategory } from "../fun/create_category";
import toast from "react-simple-toasts";
import { useAtom } from "jotai";


export default function ViewModalCreateCategory({ opened, onClose }: { opened: boolean, onClose: () => void }) {
    const [name, setName] = useState("")

    return (<>
        <Modal opened={opened} onClose={onClose}>
            <Group position='center'>
                <Stack>
                    <Title>Create New Category</Title>
                    <TextInput value={name} onChange={(val) => setName(val.currentTarget.value)} label={"name"} />
                    <Button onClick={async () => {
                        const create = await funCreateCategory(name)

                        if (create) {
                            toast("berhasil")
                            return onClose()
                        }
                        return toast("gagal")
                    }}>Save</Button>
                </Stack>

            </Group>
        </Modal>
    </>)
}