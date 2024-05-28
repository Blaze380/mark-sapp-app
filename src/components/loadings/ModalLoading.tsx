import { ReactElement } from "react";
import { InfiniteLoading, Modal, Text, View } from "../Themed";
import Colors from "@/constants/Colors";
import Images from "@/constants/Images";


export default function ModalLoading ({ visible, text }: { text: string, visible: boolean }): ReactElement {
    return (
        <Modal visible={visible} transparent={true} animationType="fade" className="justify-center items-center">
            <View className="flex w-full h-full justify-center items-center" style={{ backgroundColor: "#0000008e" }}>
                <View className="flex w-5/6 h-16 flex-row  justify-around items-center" lightColor={Colors.dark.background} darkColor={Colors.light.background}>
                    <InfiniteLoading darkImage={Images.icons.infinityLoadingLight} lightImage={Images.icons.infinityLoadingLight} style={{ width: 100, height: 100 }} />
                    <Text darkColor={Colors.light.color} lightColor={Colors.dark.color} className="text-[17]">{text}</Text>
                </View>
            </View>
        </Modal>
    )
}