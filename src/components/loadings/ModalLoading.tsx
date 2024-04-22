import { ReactElement } from "react";
import { ActivityIndicator, InfiniteLoading, Modal, Text, View } from "../Themed";
import Colors from "@/constants/Colors";
import Styles from "@/constants/Styles";
import Images from "@/constants/Images";


export default function ModalLoading ({ visible, text }: { text: string, visible: boolean }): ReactElement {
    return (
        <Modal visible={visible} transparent={true} animationType="fade" className="justify-center items-center">
            <View className="flex w-full h-full justify-center items-center" style={{ backgroundColor: "#0000008e" }}>
                <View className="flex w-9/12 h-24 flex-row   justify-evenly items-center" lightColor={Colors.dark.background} darkColor={Colors.light.background}>
                    <InfiniteLoading darkImage={Images.icons.infinityLoadingLight} lightImage={Images.icons.infinityLoadingLight} style={{ width: 130, height: 130 }} />
                    <Text darkColor={Colors.light.color} lightColor={Colors.dark.color} style={Styles.text}>{text}</Text>
                </View>
            </View>
        </Modal>
    )
}