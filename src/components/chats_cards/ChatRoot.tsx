import { ReactElement, useState } from "react";
import { TouchableOpacity } from "../Themed";
import { AppScreenNavigationProp } from "../../../types";
import { router, useNavigation } from "expo-router";
import { Screens } from "@/constants/Screens";
interface ChatRootProps {
    children: ReactElement[];
    chatId: string;
    isGroupChat?: boolean;
}
export default function ChatRoot ({ children, chatId, isGroupChat = false }: ChatRootProps): ReactElement {
    function openChatScreen (): void {
        if (isGroupChat) {
            router.push("/main_tab/group_chats_tab/GroupsChatScreen")
        }
        router.push("/main_tab/private_chats_tab/PrivateChatScreen")
    }
    return (
        <TouchableOpacity onPress={openChatScreen} className="flex flex-row items-center w-full mt-2 mb-2 ml-4" >
            {children}
        </TouchableOpacity>
    )
}