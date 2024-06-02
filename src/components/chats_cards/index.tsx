import { MessageStatus } from "@/constants/MessageStatus.enum";
import ChatMessage from "./ChatMessage";
import ChatMessageContainer from "./ChatMessageContainer";
import ChatMessageIconType from "./ChatMessageIconType";
import ChatMessageStatus from "./ChatMessageStatus";
import ChatName from "./ChatName";
import ChatProfilePhoto from "./ChatProfilePhoto";
import ChatRoot from "./ChatRoot";
import { MessageTypes } from "@/constants/MessageTypes.enum";

const Chat = {
    Root: ChatRoot,
    MessageIcon: ChatMessageIconType,
    MessageStatus: ChatMessageStatus,
    Name: ChatName,
    ProfilePhoto: ChatProfilePhoto,
    MessageContainer: ChatMessageContainer,
    Message: ChatMessage,
}
export default Chat;

export type ChatProps = {
    chatId: string;
    chatName: string;
    profilePhoto?: NodeRequire;
    lestMessageSentDate: string;
    messageStatus?: MessageStatus;
    isCurrentUserThatSentThisMessage?: boolean;
    messageType: MessageTypes;
    message: string;
    numberOfIncomingMsgs?: number;
    key?: number;

}