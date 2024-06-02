import { ReactElement } from "react";
import { Text, View } from "../Themed";
interface ChatMessageProps {
    message: string;
    numberOfIncomingMsgs?: number;
    isGroup?: boolean;
}
export default function ChatMessage (props: ChatMessageProps): ReactElement {
    return (
        <View className="ml-2 flex flex-row items-center   w-[100%]">
            <Text ellipsizeMode="tail" numberOfLines={1} className={`${ props.isGroup ? "w-[75%]" : "w-[85%]" }`}>{props.message}</Text>
            {props.numberOfIncomingMsgs &&
                (<View className="w-6 h-6 mr-5   items-center justify-center flex rounded-full bg-iblue">
                    <Text className="text-white text-[9]">{props.numberOfIncomingMsgs}</Text>
                </View>
                )}
        </View>
    );
}