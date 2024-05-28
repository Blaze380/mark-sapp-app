import { ReactElement, useState } from "react";
import { Text, TouchableOpacity, View } from "../Themed";
import { Image } from "react-native";
import Images from "@/constants/Images";
import { MessageTypes } from "@/constants/MessageTypes.enum";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MessageStatus } from "@/constants/MessageStatus.enum";

export type GroupChatProps = {
    groupName: string;
    profilePhoto?: NodeRequire;
    message: string;
    dateSent: string;
    userNameThatSentMessage?: string;
    isCurrentUserThatSentThisMessage: boolean;
    messageStatus?: MessageStatus;
    messageType?: MessageTypes;
    numberOfIncomingMsgs?: number;
    onPressEvent?: any;

}

export default function GroupChatCard (props: GroupChatProps): ReactElement {
    let messageStatusIcon: any;
    let messageTypeIcon: any;
    let messageStatusColor: string = 'white';
    const { groupName, profilePhoto, dateSent, messageStatus, isCurrentUserThatSentThisMessage,
        message, messageType, numberOfIncomingMsgs, onPressEvent, userNameThatSentMessage } = props;

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
        <TouchableOpacity onPress={(): void => onPressEvent} className="flex flex-row items-center w-full mt-2 mb-2 ml-4">
            <View className="border-2 border-white rounded-full w-14 h-14 overflow-hidden">
                <Image className={`w-full h-full rounded-full ${ profilePhoto ? '' : 'bg-white' }`} source={profilePhoto ? profilePhoto : Images.images.groupPlaceholder} style={{ resizeMode: "contain" }}></Image>
            </View>
            <View className="ml-4 w-56">
                <View className="flex flex-row  items-center justify-between">
                    <Text className="text-text font-bold" ellipsizeMode="tail" numberOfLines={1}>{groupName}</Text>
                    <Text className="text-text ">{dateSent}</Text>
                </View>
                <View className="flex flex-row items-center" >
                    {isCurrentUserThatSentThisMessage && <MaterialCommunityIcons name={messageStatusIcon} size={20} color={messageStatusColor} />}
                    <Text>{isCurrentUserThatSentThisMessage ? `${ userNameThatSentMessage ? userNameThatSentMessage : "You" }:` : 'You:'}</Text>

                    <View className="ml-2 flex flex-row items-center justify-between w-56">
                        <View className="flex flex-row items-center space-x-1">
                            {messageType && <MaterialCommunityIcons name={messageTypeIcon} size={20} color={'white'} />}
                            <Text ellipsizeMode="tail" numberOfLines={1}>{message}</Text>
                        </View>
                        {numberOfIncomingMsgs &&
                            (<View className="w-6 h-6 mr-5 relative right-0 flex items-center justify-center rounded-full bg-iblue">
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