import { Stack } from "expo-router";
import { ReactElement } from "react";

export default function RootLayout (): ReactElement {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name={"InsertPhoneNumber"} />
            <Stack.Screen name={"ValidateOtpCode"} />
            <Stack.Screen name={"CreateProfile"} />
        </Stack>
    )
};
