import AnyRecordMessage from "@/components/AnyRecordMessage";
import { Text } from "@/components/Themed";
import PrivateChatCard from "@/components/chat/PrivateChatCard";
import GestureScreenContainer from "@/components/screen_container/GestureScreenContainer";
import { MessageStatus } from "@/constants/MessageStatus.enum";
import { MessageTypes } from "@/constants/MessageTypes.enum";
import { ReactElement } from "react";
import { Alert } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function PrivateChatScreen (): ReactElement {
    return (
        <GestureScreenContainer>
            <ScrollView className="w-full h-full mt-4" >
                {/* {true && <AnyRecordMessage text='Clique no + para iniciar conversa' />} */}
                <PrivateChatCard userName="Blaze" message="Olá" dateSent="13:20" numberOfIncomingMsgs={4} isCurrentUserThatSentThisMessage={false} />
                <PrivateChatCard userName="Joãozinh 123" message="Minecraft ta bom" dateSent="10:01" isCurrentUserThatSentThisMessage={true} messageStatus={MessageStatus.READ} />
                <PrivateChatCard userName="joana 123" message="Text" dateSent="19:01" isCurrentUserThatSentThisMessage={false} messageStatus={MessageStatus.SENT} messageType={MessageTypes.DOCUMENT} />
                <PrivateChatCard userName="joa1na 123" message="assad" dateSent="19:01" isCurrentUserThatSentThisMessage={true} messageStatus={MessageStatus.QUEUE} messageType={MessageTypes.PHOTO} />
                <PrivateChatCard userName="joana 123" message="Text" dateSent="19:01" numberOfIncomingMsgs={4} isCurrentUserThatSentThisMessage={false} messageStatus={MessageStatus.SENT} messageType={MessageTypes.RECORDED_AUDIO} />
                <PrivateChatCard userName="joana 123" message="Text" dateSent="19:01" isCurrentUserThatSentThisMessage={true} messageStatus={MessageStatus.DELIVERED} messageType={MessageTypes.VIDEO} />
                <PrivateChatCard userName="joana 123" message="Text" dateSent="19:01" isCurrentUserThatSentThisMessage={true} messageStatus={MessageStatus.NOT_SENT} messageType={MessageTypes.AUDIO} />
                <PrivateChatCard userName="joana 123" message="Text" dateSent="19:01" isCurrentUserThatSentThisMessage={true} messageStatus={MessageStatus.SENT} messageType={MessageTypes.UNKNOWN} />
                <PrivateChatCard userName="joana 123" message="Text" dateSent="19:01" isCurrentUserThatSentThisMessage={true} messageStatus={MessageStatus.DELIVERED} messageType={MessageTypes.TEXT} />

            </ScrollView>
        </GestureScreenContainer>
    )
}