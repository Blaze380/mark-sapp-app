import { ReactElement, useState } from "react";
import { Text, TouchableOpacity, View } from "../Themed";
import { Image } from "react-native";
import Images from "@/constants/Images";
import { MessageTypes } from "@/constants/MessageTypes.enum";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MessageStatus } from "@/constants/MessageStatus.enum";
import Chat, { ChatProps } from ".";

export type GroupChatProps = ChatProps & {
    msgSenderName?: string;
}


export default function GroupChatCard (props: GroupChatProps): ReactElement {
    const { messageStatus, isCurrentUserThatSentThisMessage,
        message, numberOfIncomingMsgs, chatId, lestMessageSentDate, key, messageType, profilePhoto, chatName, msgSenderName } = props;
    return (
        <Chat.Root chatId={chatId} isGroupChat key={key}>
            <Chat.ProfilePhoto profilePhoto={profilePhoto} />
            <View className="ml-4 w-[70%]">
                <Chat.Name chatName={chatName} lastMessageSentDate={lestMessageSentDate} />
                <Chat.MessageContainer>
                    <Chat.MessageStatus messageStatus={messageStatus ? messageStatus : MessageStatus.NOT_SENT} isCurrentUserThatSentThisMessage={isCurrentUserThatSentThisMessage} isGroup msgSenderName={msgSenderName} />
                    <Chat.MessageIcon messageType={messageType ? messageType : MessageTypes.UNKNOWN} />
                    <Chat.Message message={message} numberOfIncomingMsgs={numberOfIncomingMsgs} isGroup />
                </Chat.MessageContainer>
            </View>
        </Chat.Root>
    )
}
