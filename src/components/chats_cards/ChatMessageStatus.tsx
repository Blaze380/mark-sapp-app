import Colors from "@/constants/Colors";
import { MessageStatus } from "@/constants/MessageStatus.enum";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ReactElement } from "react";
import { useColorScheme } from "react-native";
import { Text } from "../Themed";

interface ChatMessageStatusProps {
    messageStatus: MessageStatus;
    isCurrentUserThatSentThisMessage?: boolean
    isGroup?: boolean
    msgSenderName?: string
}
export default function ChatMessageStatus (props: ChatMessageStatusProps): ReactElement {
    let messageStatusColor: string = useColorScheme() == 'dark' ? 'white' : Colors.light.color;
    let messageStatusIcon: any;
    let messageSenderName: string = "";
    if (props.isGroup && props.isCurrentUserThatSentThisMessage) {
        messageSenderName = (props.msgSenderName ? props.msgSenderName : "You") + ":";
    }

    function getSetMessageStatus (): void {
        if (!props.messageStatus && !props.isCurrentUserThatSentThisMessage) {
            return;
        }
        if (props.messageStatus === MessageStatus.READ) {
            messageStatusIcon = "check-all"
            messageStatusColor = 'red';
        } else {
            messageStatusIcon = getMessageStatusIcon(props.messageStatus);
        }
    }
    getSetMessageStatus();
    return (
        <>
            {props.isCurrentUserThatSentThisMessage && <MaterialCommunityIcons name={messageStatusIcon} size={20} color={messageStatusColor} />}
            {props.isGroup && (<Text>{messageSenderName}</Text>)}
        </>
    );
}

function getMessageStatusIcon (messageStatus: MessageStatus): string {
    if (messageStatus === MessageStatus.QUEUE) {
        return "clock-time-three-outline";
    } else if (messageStatus === MessageStatus.SENT) {
        return "check";

    } else if (messageStatus === MessageStatus.DELIVERED) {
        return "check-all";
    }
    return ('');
}