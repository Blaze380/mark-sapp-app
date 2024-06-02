import { ReactElement } from "react";
import { View } from "../Themed";
import { Image } from "react-native";
import Images from "@/constants/Images";

interface ChatProfilePhotoProps{
    profilePhoto?: NodeRequire;
}
export default function ChatProfilePhoto (props: ChatProfilePhotoProps):ReactElement {
    return(
        <View className="border-2 border-white rounded-full w-14 h-14 overflow-hidden">
            <Image className={`w-full h-full rounded-full ${ props.profilePhoto ? '' : 'bg-white' }`} source={props.profilePhoto ? props.profilePhoto : Images.images.groupPlaceholder} style={{ resizeMode: "contain" }}/>
        </View>
    )
}