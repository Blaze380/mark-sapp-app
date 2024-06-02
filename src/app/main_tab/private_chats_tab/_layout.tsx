import { Stack } from "expo-router";
import { ReactElement } from "react";

export default function RootLayout (): ReactElement {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="PrivateChatScreen" />
        </Stack>
    )
};
