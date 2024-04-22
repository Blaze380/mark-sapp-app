import { StatusBar } from "expo-status-bar";
import { ReactElement, ReactNode } from "react";
import { ColorSchemeName, Platform, useColorScheme } from "react-native";
import { GestureHandlerRootView, View } from "../Themed";
import Colors from "@/constants/Colors";

export default function GestureScreenContainer ({ children }: { children: ReactNode }): ReactElement {
    const colorScheme: ColorSchemeName = useColorScheme();
    const statusbarColor: string = colorScheme == 'light' ? Colors.light.background : Colors.dark.background;

    return (
        <GestureHandlerRootView lightColor={Colors.light.background} darkColor={Colors.dark.background} style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            {children}
            <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} backgroundColor={statusbarColor} />
        </GestureHandlerRootView>
    );
}