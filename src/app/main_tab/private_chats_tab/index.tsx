import AnyRecordMessage from "@/components/AnyRecordMessage";
import { Text, View } from "@/components/Themed";
import Chat from "@/components/chats_cards";
import PrivateChatCard from "@/components/chats_cards/PrivateChatCard";
import GestureScreenContainer from "@/components/screen_container/GestureScreenContainer";
import { FakeGroupChats, FakePrivateChats } from "@/constants/Chats";
import { MessageStatus } from "@/constants/MessageStatus.enum";
import { MessageTypes } from "@/constants/MessageTypes.enum";
import { ReactElement } from "react";
import { Alert } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";

export default function PrivateChatScreen (): ReactElement {
    return (
        <GestureScreenContainer>
            {/* {true && <AnyRecordMessage text='Clique no + para iniciar conversa' />} */}
            <FlatList className="w-full h-full mt-4" data={FakePrivateChats} renderItem={chat => (<PrivateChatCard {...chat.item} />)} keyExtractor={chat => chat.chatId} />


        </GestureScreenContainer>
    )
}

