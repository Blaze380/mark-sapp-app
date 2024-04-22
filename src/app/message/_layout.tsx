import { Screens } from "@/constants/Screens";
import { Stack } from "expo-router";
import { ReactElement } from "react";

export default function MessagesLayout (): ReactElement {
    return (
        <Stack>
            <Stack.Screen name={Screens.PRIVATE_CHAT} />
            <Stack.Screen name={Screens.GROUP_CHAT} />
            <Stack.Screen name={Screens.USER_PROFILE} />
        </Stack>
    );
}