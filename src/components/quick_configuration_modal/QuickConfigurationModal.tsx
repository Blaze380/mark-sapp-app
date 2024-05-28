import { ReactElement, useState } from "react";
import { Text, View } from "../Themed";
import { ScrollView, Switch } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { ColorSchemeName, useColorScheme } from "react-native";
import QuickConfigurationButton from "./QuickConfigurationButton";

interface Props {
    enableDarkMode: boolean;
    onValueChange: () => void;
}
export default function QuickConfigurationModal (): ReactElement {
    const colorScheme: ColorSchemeName = useColorScheme();
    const [enableDarkMode, setEnableDarkMode] = useState<boolean>(false);
    return (
        <View className='flex items-center justify-center' style={{ backgroundColor: Colors[colorScheme ?? 'light'].bottomSheetBackground }}>
            <View className='flex items-center justify-start h-9  flex-row space-x-3 bg-transparent' >
                <Text className='text-title font-bold'>Configurações Rápidas</Text>
            </View>
            <View className='border-b-2 w-11/12 mb-10' style={{ borderBottomColor: Colors[colorScheme ?? 'light'].buttonText }} />
            <ScrollView className='w-full h-full '>
                <View className='flex items-center justify-between flex-row bg-transparent'>
                    <View className=' ml-5 flex items-center justify-start flex-row space-x-2 bg-transparent'>
                        <MaterialCommunityIcons name="brightness-7" size={30} color={Colors[colorScheme ?? 'light'].color} />
                        <Text className='text-text font-semibold'>Modo escuro</Text>
                    </View>
                    <Switch className='mr-10' value={enableDarkMode} thumbColor={enableDarkMode ? Colors.light.buttonBackground : '#f4f3f4'} trackColor={{ false: '#767577', true: Colors.light.buttonBackground }} onValueChange={(): void => setEnableDarkMode(!enableDarkMode)}></Switch>
                </View>
                <QuickConfigurationButton iconName={"chat-plus-outline"} text="Nova Conversa" />
                <QuickConfigurationButton iconName={"gear"} text="Configurações" />
                <QuickConfigurationButton iconName={"contacts-outline"} text="Adicionar contacto" />
                <QuickConfigurationButton iconName={"check-outline"} text="Etc" />
            </ScrollView>
        </View>
    )
}