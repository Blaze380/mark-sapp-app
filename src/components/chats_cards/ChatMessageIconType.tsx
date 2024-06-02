import { MessageTypes } from "@/constants/MessageTypes.enum";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ReactElement } from "react";

interface ChatMessageIconTypeProps {
    messageType: MessageTypes;
}
export default function ChatMessageIconType (props: ChatMessageIconTypeProps): ReactElement {
    let messageTypeIcon: any;

    if (props.messageType) {
        if (props.messageType !== MessageTypes.TEXT) {
            messageTypeIcon = getMessageType(props.messageType);
        }
    }
    return (
        <>
            {props.messageType && <MaterialCommunityIcons name={messageTypeIcon} size={20} color={'white'} />}
        </>
    );
}
function getMessageType (messageType: MessageTypes): string {
    if (messageType === MessageTypes.AUDIO) {
        return 'headset';
    } else if (messageType === MessageTypes.RECORDED_AUDIO) {
        return 'microphone';
    } else if (messageType === MessageTypes.DOCUMENT) {
        return 'file-document';
    } else if (messageType === MessageTypes.PHOTO) {
        return 'image';
    } else if (messageType === MessageTypes.VIDEO) {
        return 'video';
    } else if (messageType === MessageTypes.UNKNOWN) {
        return 'progress-question'
    }
    return ('')
}
