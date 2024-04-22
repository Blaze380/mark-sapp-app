import { Stack } from "expo-router";
import { ReactElement } from "react";

export default function MessagesLayout (): ReactElement {
    return (
        <Stack>
            <Stack.Screen name="PrivateChats" />
            <Stack.Screen name="GroupChats" />
            <Stack.Screen name="" />
        </Stack>
    );
}