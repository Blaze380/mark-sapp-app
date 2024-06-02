import { ReactElement } from "react";
import { View } from "../../Themed";
import { Image } from "react-native";

interface ChatPageImageProps {
    image: string;
}
export default function ChatPageImage (props: ChatPageImageProps): ReactElement {
    return (
        <View className="">
            <Image src={props.image} className="" />
        </View>
    )
};
