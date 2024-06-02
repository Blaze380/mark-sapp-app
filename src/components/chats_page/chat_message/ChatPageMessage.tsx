import { ReactElement } from "react";
import { Text, View } from "../../Themed";

interface ChatPageMessageProps {
    message: string;
}
export default function ChatPageMessage (props: ChatPageMessageProps): ReactElement {
    return (
        <View className="w-auto flex  text-justify bg-iblue p-2a">
            <View className="text-text bg-transparent">
                <Text>{props.message}</Text>
            </View>

        </View>
    )
};

