import AnyRecordMessage from "@/components/AnyRecordMessage";
import { Text } from "@/components/Themed";
import GroupChatCard from "@/components/chats_cards/GroupChatCard";
import GestureScreenContainer from "@/components/screen_container/GestureScreenContainer";
import { FakeGroupChats } from "@/constants/Chats";
import { MessageStatus } from "@/constants/MessageStatus.enum";
import { MessageTypes } from "@/constants/MessageTypes.enum";
import { ReactElement } from "react";
import { Alert } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";

export default function GroupsChatScreen (): ReactElement {
    return (
        <GestureScreenContainer>
            <FlatList data={FakeGroupChats} renderItem={chat => <GroupChatCard  {...chat.item} />} keyExtractor={key => key.chatId} className="w-full h-full mt-4" />
            {/* {true && <AnyRecordMessage text='Clique no + para iniciar conversa' />} */}

        </GestureScreenContainer>
    )
}