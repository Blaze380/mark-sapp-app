import { ReactElement, useState } from "react";
import { Text, View } from "../Themed";
import { ScrollView, Switch } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { ColorSchemeName, useColorScheme } from "react-native";
import QuickConfigurationButton from "./QuickConfigurationButton";
import QuickConfiguration from "./QuickConfigurationTitle";

interface Props {
    enableDarkMode: boolean;
}
export default function QuickConfigurationModal (): ReactElement {
    const colorScheme: ColorSchemeName = useColorScheme();
    return (
        <View className='flex items-center justify-center' style={{ backgroundColor: Colors[colorScheme ?? 'light'].bottomSheetBackground }}>
            <QuickConfiguration title="Configurações Rápidas" />
            <View className='border-b-2 w-11/12' style={{ borderBottomColor: Colors[colorScheme ?? 'light'].buttonText }} />
            <ScrollView className='w-full'>
                <QuickConfigurationButton iconName={"brightness-7"} text="Modo Escuro" />
                <QuickConfigurationButton iconName={"chat-plus-outline"} text="Nova Conversa" />
                <QuickConfigurationButton iconName={"gear"} text="Configurações" />
                <QuickConfigurationButton iconName={"contacts-outline"} text="Adicionar contacto" />
                <QuickConfigurationButton iconName={"check-outline"} text="Etc" />
            </ScrollView>
        </View>
    )
}