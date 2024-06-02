import { ReactElement, useState } from "react";

import Chat, { ChatProps } from ".";
import { View } from "../Themed";
import { MessageStatus } from "@/constants/MessageStatus.enum";
import { MessageTypes } from "@/constants/MessageTypes.enum";


export type PrivateChatProps = ChatProps;

export default function PrivateChatCard (props: PrivateChatProps): ReactElement {
    const { messageStatus, isCurrentUserThatSentThisMessage,
        message, key, numberOfIncomingMsgs, chatId, lestMessageSentDate, messageType, profilePhoto, chatName } = props;



    return (
        <Chat.Root chatId={chatId} key={key} >
            <Chat.ProfilePhoto profilePhoto={profilePhoto} />
            <View className="ml-4 w-[70%]">
                <Chat.Name chatName={chatName} lastMessageSentDate={lestMessageSentDate} />
                <Chat.MessageContainer>
                    <Chat.MessageStatus messageStatus={messageStatus ? messageStatus : MessageStatus.NOT_SENT} isCurrentUserThatSentThisMessage={isCurrentUserThatSentThisMessage} />
                    <Chat.MessageIcon messageType={messageType ? messageType : MessageTypes.UNKNOWN} />
                    <Chat.Message message={message} numberOfIncomingMsgs={numberOfIncomingMsgs} />
                </Chat.MessageContainer>
            </View>
        </Chat.Root>
    );
}

