import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ReactElement, useRef, useState } from "react";
import { TouchableOpacity } from "react-native";
import { TextInput, View } from "react-native";

type ChatPageSendButtonProps = {
    textValueContext?: string;
}
export default function ChatPageMessageInput (props: ChatPageSendButtonProps): ReactElement {
    const [messageText, setMessageText] = useState<string>("");
    const sendMessageButtonRef = useRef(null);
    function sendMessage (messageType: "text" | "audio"): void {
        switch (messageType) {
            case "text":

                break;

            case "audio":
                break;
        }
    }
    return (
        <View className=" flex-row justify-between bg-green-500a  ">
            <View className="flex-row bg-iblue items-center rounded-full ml-2 justify-around">
                <TouchableOpacity className="rounded-full p-[2px]">
                    <MaterialCommunityIcons name="face-man" size={30} />
                </TouchableOpacity>
                <View className="h-12 w-[60%]">
                    <TextInput className="text-white flex-wrap  h-full placeholder:text-white" placeholder="Digite Algo..." value={messageText} onChangeText={(text: string): void => setMessageText(text)} />
                </View>
                <View className="h-full  bg-transparent flex-row items-center">
                    <TouchableOpacity className="rounded-full p-[2px]">
                        <MaterialCommunityIcons name="paperclip" size={30} />
                    </TouchableOpacity>
                    <TouchableOpacity className="rounded-full p-[2px]">
                        <MaterialCommunityIcons name="camera" size={30} />
                    </TouchableOpacity>
                </View>
            </View>
            <View className="bg-iblue rounded-full w-12 items-center justify-center mr-2">
                <TouchableOpacity onPress={(): void => sendMessage(messageText === "" ? "audio" : "text")}>
                    <MaterialCommunityIcons ref={sendMessageButtonRef} name={messageText === "" ? "microphone" : "send"} size={30} />
                </TouchableOpacity>
            </View>
        </View>
    );
};
