import { MessageTypes } from "./MessageTypes.enum";
import Images from "./Images";
import { MessageStatus } from "./MessageStatus.enum";
import { PrivateChatProps } from "@/components/chats_cards/PrivateChatCard";
import { GroupChatProps } from "@/components/chats_cards/GroupChatCard";

export const FakePrivateChats: PrivateChatProps[] = [
    {
        chatId: "dfksmkm4888888665",
        chatName: "Blaze",
        lestMessageSentDate: "20:10",
        message: "Oi, Como está?",
        messageType: MessageTypes.TEXT,
        numberOfIncomingMsgs: 20,
    },
    {
        chatId: "dfksmk4m4665",
        chatName: "Niuro",
        lestMessageSentDate: "10:10",
        message: "Bebia",
        messageType: MessageTypes.TEXT,
        messageStatus: MessageStatus.DELIVERED,
        isCurrentUserThatSentThisMessage: true,
    },
    {
        chatId: "dfksm5km4665",
        chatName: "Luna",
        lestMessageSentDate: "23:06",
        message: "Hey",
        messageType: MessageTypes.TEXT,
    },
    {

        chatId: "dfksm6k2166m4665",
        chatName: "Blaze",
        lestMessageSentDate: "20:10",
        message: "Oi, Como está?",
        messageType: MessageTypes.TEXT,
    },
    {
        chatId: "dfksmkm21321313124665",
        chatName: "Blaze",
        lestMessageSentDate: "20:10",
        message: "Oi, Como está?",
        messageType: MessageTypes.TEXT,
    },
];
export const FakeGroupChats: GroupChatProps[] = [
    {
        chatId: "dfks4214m4665",
        chatName: "Minecraft legends",
        lestMessageSentDate: "20:10",
        message: "Oi, Como está?",
        messageType: MessageTypes.TEXT,
        msgSenderName: "blaze",
    },
    {
        chatId: "dfksm5756756km4665",
        chatName: "Moz devs",
        lestMessageSentDate: "10:10",
        message: "Throw new Java(",
        messageType: MessageTypes.VIDEO,
        messageStatus: MessageStatus.DELIVERED,
        isCurrentUserThatSentThisMessage: true,
    },
    {
        chatId: "dfksm7767km4665",
        chatName: "MoonLight",
        lestMessageSentDate: "23:06",
        message: "Hey",
        messageType: MessageTypes.RECORDED_AUDIO,
        msgSenderName: "Luna",
        numberOfIncomingMsgs: 20,
    },
    {
        chatId: "dfksmk959999m4665",
        chatName: "Schooç",
        lestMessageSentDate: "20:10",
        message: "Oi, Como está?",
        messageType: MessageTypes.DOCUMENT,
        msgSenderName: "Mugabe",
        numberOfIncomingMsgs: 300,
    },
    {
        chatId: "dfks999955mkm4665",
        chatName: "Blaze",
        lestMessageSentDate: "20:10",
        message: "Oi, Como está?",
        messageType: MessageTypes.PHOTO,
        msgSenderName: "Luffy"
    },
];