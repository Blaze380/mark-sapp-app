import AnyRecordMessage from "@/components/AnyRecordMessage";
import { Text } from "@/components/Themed";
import GroupChatCard from "@/components/chat/GroupChatCard";
import GestureScreenContainer from "@/components/screen_container/GestureScreenContainer";
import { MessageStatus } from "@/constants/MessageStatus.enum";
import { MessageTypes } from "@/constants/MessageTypes.enum";
import { ReactElement } from "react";
import { Alert } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function GroupsChatScreen (): ReactElement {
    return (
        <GestureScreenContainer>
            <ScrollView className="w-full h-full mt-4" >
                {/* {true && <AnyRecordMessage text='Clique no + para iniciar conversa' />} */}
                <GroupChatCard groupName="Blaze" message="Olá" dateSent="13:20" isCurrentUserThatSentThisMessage={false} />
                <GroupChatCard groupName="Joãozinh 123" message="Minecraft ta bom" dateSent="10:01" isCurrentUserThatSentThisMessage={true} messageStatus={MessageStatus.READ} />
                <GroupChatCard groupName="joana 123" message="Text" dateSent="19:01" isCurrentUserThatSentThisMessage={false} messageStatus={MessageStatus.SENT} messageType={MessageTypes.DOCUMENT} />
                <GroupChatCard groupName="joa1na 123" message="assad" dateSent="19:01" isCurrentUserThatSentThisMessage={true} messageStatus={MessageStatus.QUEUE} messageType={MessageTypes.PHOTO} />
                <GroupChatCard groupName="joana 123" message="Text" dateSent="19:01" isCurrentUserThatSentThisMessage={false} messageStatus={MessageStatus.SENT} messageType={MessageTypes.RECORDED_AUDIO} />
                <GroupChatCard groupName="joana 123" message="Text" dateSent="19:01" isCurrentUserThatSentThisMessage={true} userNameThatSentMessage="gabadiya" messageStatus={MessageStatus.DELIVERED} messageType={MessageTypes.VIDEO} />
                <GroupChatCard groupName="joana 123" message="Text" dateSent="19:01" isCurrentUserThatSentThisMessage={true} messageStatus={MessageStatus.NOT_SENT} messageType={MessageTypes.AUDIO} />
                <GroupChatCard groupName="joana 123" message="Text" dateSent="19:01" isCurrentUserThatSentThisMessage={true} messageStatus={MessageStatus.SENT} messageType={MessageTypes.UNKNOWN} />
                <GroupChatCard groupName="joana 123" message="Text" dateSent="19:01" isCurrentUserThatSentThisMessage={true} messageStatus={MessageStatus.DELIVERED} messageType={MessageTypes.TEXT} />

            </ScrollView>
        </GestureScreenContainer>
    )
}