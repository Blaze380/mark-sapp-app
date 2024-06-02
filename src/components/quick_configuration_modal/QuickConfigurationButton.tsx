import { ReactElement } from "react";
import { Text, TouchableOpacity } from "../Themed";
import { MaterialCommunityIcons, Octicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { ColorSchemeName, useColorScheme } from "react-native";

interface QuickConfigurationButtonProps {
    iconName: any;
    text: string
}
export default function QuickConfigurationButton (props: QuickConfigurationButtonProps): ReactElement {
    const colorScheme: ColorSchemeName = useColorScheme();
    return (
        <TouchableOpacity className=' ml-5 mt-1 flex items-center justify-start flex-row space-x-2 bg-transparent'>
            {props.iconName == "gear" ? <Octicons name="gear" size={30} color={Colors[colorScheme ?? 'light'].color} /> : <MaterialCommunityIcons name={props.iconName} size={30} color={Colors[colorScheme ?? 'light'].color} />}
            <Text className='text-text font-semibold'>{props.text}</Text>
        </TouchableOpacity>
    );
}