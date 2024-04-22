import { ReactElement, useState } from "react";
import { Text, TouchableOpacity, View } from "../Themed";
import { Image } from "react-native";
import Images from "@/constants/Images";
import { MessageTypes } from "@/constants/MessageTypes.enum";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MessageStatus } from "@/constants/MessageStatus.enum";

export type PrivateChatProps = {
    userName: string;
    profilePhoto?: NodeRequire;
    message: string;
    dateSent: string;
    isCurrentUserThatSentThisMessage: boolean;
    messageStatus?: MessageStatus;
    messageType?: MessageTypes;
    numberOfIncomingMsgs?: number;

}

export default function PrivateChatCard (props: PrivateChatProps): ReactElement {
    let messageStatusIcon: any;
    let messageTypeIcon: any;
    let messageStatusColor: string = 'white';
    const { userName, profilePhoto, dateSent, messageStatus, isCurrentUserThatSentThisMessage,
        message, messageType, numberOfIncomingMsgs } = props;

    if (messageStatus && isCurrentUserThatSentThisMessage) {
        if (messageStatus === MessageStatus.READ) {
            messageStatusIcon = "check-all"
            messageStatusColor = 'red';
        } else {
            messageStatusIcon = getMessageStatusIcon(messageStatus);
        }
    }
    if (messageType) {
        if (messageType !== MessageTypes.TEXT) {
            messageTypeIcon = getMessageType(messageType);
        }
    }

    return (
        <TouchableOpacity className="flex flex-row items-center w-full mt-2 mb-2 ml-4">
            <View className="border-2 border-white rounded-full w-16 h-16 overflow-hidden">
                <Image className={`w-full h-full rounded-full ${ profilePhoto ? '' : 'bg-white' }`} source={profilePhoto ? profilePhoto : Images.images.userPlaceholder} style={{ resizeMode: "contain" }}></Image>
            </View>
            <View className="ml-4 w-96">
                <View className="flex flex-row  items-center justify-between">
                    <Text className="text-lg font-bold">{userName}</Text>
                    <Text className="text-lg ">{dateSent}</Text>
                </View>
                <View className="flex flex-row items-center" >
                    {isCurrentUserThatSentThisMessage && <MaterialCommunityIcons name={messageStatusIcon} size={20} color={messageStatusColor} />}
                    {messageType && <MaterialCommunityIcons name={messageTypeIcon} size={20} color={'white'} />}

                    <View className="ml-2 flex flex-row items-center justify-between w-96">
                        <Text>{message}</Text>
                        {numberOfIncomingMsgs &&
                            (<View className="w-7 h-7 mr-5 items-center justify-center rounded-full bg-green-600">
                                <Text className="text-white " style={{ fontSize: 9 }}>{numberOfIncomingMsgs}</Text>
                            </View>
                            )}
                    </View>
                </View>

            </View>
        </TouchableOpacity>
    );
}
function getMessageType (messageType: MessageTypes): string {
    if (messageType === MessageTypes.AUDIO) {
        return 'headset';
    } else if (messageType === MessageTypes.RECORDED_AUDIO) {
        return 'microphone';
    } else if (messageType === MessageTypes.DOCUMENT) {
        return 'file-document';
    } else if (messageType === MessageTypes.PHOTO) {
        return 'image';
    } else if (messageType === MessageTypes.VIDEO) {
        return 'video';
    } else if (messageType === MessageTypes.UNKNOWN) {
        return 'progress-question'
    }
    return ('')
}

function getMessageStatusIcon (messageStatus: MessageStatus): string {
    if (messageStatus === MessageStatus.QUEUE) {
        return "clock-time-three-outline";
    } else if (messageStatus === MessageStatus.SENT) {
        return "check";

    } else if (messageStatus === MessageStatus.DELIVERED) {
        return "check-all";
    }
    return ('');
}