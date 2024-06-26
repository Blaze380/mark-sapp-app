import { StatusBar } from "expo-status-bar";
import { ReactElement, ReactNode } from "react";
import { ColorSchemeName, Platform, useColorScheme } from "react-native";
import { View } from "../Themed";
import Colors from "@/constants/Colors";

export default function ScreenContainer ({ children }: { children: ReactNode }): ReactElement {
    const colorScheme: ColorSchemeName = useColorScheme();
    const statusbarColor: string = colorScheme == 'light' ? Colors.light.background : Colors.dark.background;

    return (
        <View lightColor={Colors.light.background} darkColor={Colors.dark.background} style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            {children}
            <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} backgroundColor={statusbarColor} />
        </View>
    );
}