import { ReactElement } from "react";
import { View } from "../Themed";

interface ChatMessageContainerProps {
    children: ReactElement[];
}
export default function ChatMessageContainer ({ children }: ChatMessageContainerProps): ReactElement {

    return (
        <View className="flex flex-row items-center" >
            {children}
        </View>
    )
}