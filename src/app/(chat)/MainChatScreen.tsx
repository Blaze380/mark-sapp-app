import { Text } from "@/components/Themed";
import PrivateChatCard from "@/components/chat/PrivateChatCard";
import GestureScreenContainer from "@/components/screen_container/GestureScreenContainer";
import { MessageStatus } from "@/constants/MessageStatus.enum";
import { MessageTypes } from "@/constants/MessageTypes.enum";
import { ReactElement } from "react";
import { ScrollView } from "react-native-gesture-handler";

export default function MainChatScreen (): ReactElement {
    return (
        <GestureScreenContainer>
            <ScrollView className="w-full h-full mt-4" >
                <PrivateChatCard userName="Blaze" message="Olá" dateSent="13:20" isCurrentUserThatSentThisMessage={false} />
                <PrivateChatCard userName="Joãozinh 123" message="Minecraft ta bom" dateSent="10:01" isCurrentUserThatSentThisMessage={true} messageStatus={MessageStatus.READ} />
                <PrivateChatCard userName="joana 123" message="Text" dateSent="19:01" isCurrentUserThatSentThisMessage={true} messageStatus={MessageStatus.SENT} messageType={MessageTypes.DOCUMENT} />

            </ScrollView>
        </GestureScreenContainer>
    )
}