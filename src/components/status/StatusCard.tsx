import { ReactElement } from "react";
import { Text, TouchableOpacity, View, } from "../Themed";
import Images from "@/constants/Images";
import { Image } from "react-native";
import { ImageSourcePropType } from "react-native";
type StatusCardProps = {
    image?: ImageSourcePropType;
    userName: string;
    time: string;
}
export default function StatusCard (props: StatusCardProps): ReactElement {
    return (
        <TouchableOpacity className="flex flex-row space-x-3 w-full mt-2 mb-2">
            <View className="border-4  border-l-iblue w-14 h-14 items-center justify-center border-r-iblue rounded-full overflow-hidden">
                <Image source={props.image ? props.image : Images.images.userPlaceholder} className="w-20 h-20" resizeMode="cover" />
            </View>
            <View className="flex  space-y-2 ">
                <Text className="font-bold text-text">{props.userName}</Text>
                <Text>{`${ props.time } Atrás`}</Text>
            </View>

        </TouchableOpacity>

    );
}