import { StatusBar } from "expo-status-bar";
import { ReactElement, ReactNode } from "react";
import { Platform } from "react-native";
import { View } from "../Themed";
import Colors from "@/constants/Colors";

export default function ScreenContainer ({ children }: { children: ReactNode }): ReactElement {
    return (
        <View lightColor={Colors.light.background} darkColor={Colors.dark.background} style={{flex:1,alignItems:"center",justifyContent:"center"}}>
            {children}
            <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} backgroundColor='#0A5375'  />
        </View>
    );
}