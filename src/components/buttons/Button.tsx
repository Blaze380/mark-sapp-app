import { ReactElement, ReactNode } from "react";
import { Text, TouchableOpacity } from "../Themed";
import Colors from "@/constants/Colors";
import Styles from "@/constants/Styles";

interface Props {
    onPress: any;
    text: ReactNode;
}

export default function Button (props: Props): ReactElement {

    return (
        <TouchableOpacity onPress={props.onPress} className="items-center justify-center w-[300] h-[40] rounded-full" lightColor={Colors.light.buttonBackground} darkColor={Colors.dark.buttonBackground}>
            <Text className="text-[20]" lightColor={Colors.light.text} darkColor={Colors.dark.text}>{props.text}</Text>
        </TouchableOpacity>
    )
}