import { ReactElement } from "react";
import { Text, View } from "../Themed";
interface ChatNameProps {
    chatName: string;
    lastMessageSentDate: string;
}
export default function ChatName (props: ChatNameProps): ReactElement {
    return (
        <View className="flex flex-row  items-center justify-between">
            <Text className="text-text font-bold" ellipsizeMode="tail" numberOfLines={1}>{props.chatName}</Text>
            <Text className="text-text ">{props.lastMessageSentDate}</Text>
        </View>
    )
}