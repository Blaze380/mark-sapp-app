import { ReactElement, ReactNode } from "react";
import { Text, TouchableOpacity, View } from "../Themed";
import Colors from "@/constants/Colors";
export type IconButtonProps = {
    text: string;
    onClick?: () => void | Promise<void> | null | Promise<null>;
    Icon?: ReactElement | any;
    iconProps?: IconProps;
}
type IconProps = {
    name: string;
    size: number;
    color: string;
}
export default function IconButton (props: IconButtonProps): ReactElement {
    return (
        <TouchableOpacity className="flex flex-col items-center justify-center" onPress={props.onClick}>
            {props.Icon && <props.Icon {...props.iconProps} />}
            <Text className="text-text" lightColor={Colors.light.text} darkColor={Colors.dark.text}>{props.text}</Text>
        </TouchableOpacity>
    )
};
