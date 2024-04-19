import { ReactElement } from "react";
import {  ActivityIndicator, Modal, Text, View } from "../Themed";
import Colors from "@/constants/Colors";
import Styles from "@/constants/Styles";


export default function ModalLoading ({ visible}:{visible:boolean}) :ReactElement{
    return (
        <Modal visible={visible} transparent={true} animationType="fade" className="justify-center items-center">
            <View className="flex w-full h-full justify-center items-center" style={{backgroundColor:"#0000008e"}}>
                <View className="flex w-64 h-24 flex-row  space-x-5 justify-center items-center" lightColor={Colors.dark.background} darkColor={Colors.light.background}>
                    <ActivityIndicator lightColor={Colors.dark.color} darkColor={Colors.light.color} />
                    <Text darkColor={Colors.light.color} lightColor={Colors.dark.color} style={Styles.text}>Carregando</Text>
                </View>
            </View>
        </Modal>
    )
}