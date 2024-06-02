import { Text, TouchableOpacity, View } from "@/components/Themed";
import GestureScreenContainer from "@/components/screen_container/GestureScreenContainer";
import Images from "@/constants/Images";
import { Screens } from "@/constants/Screens";
import { FontAwesome6, MaterialCommunityIcons } from "@expo/vector-icons";
import { router, useNavigation, AllRoutes } from "expo-router";
import { ReactElement, useEffect } from "react";
import { ColorSchemeName, Image, ImageBackground, SafeAreaView, StyleSheet, useColorScheme } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ChatPage from "@/components/chats_page/chat_message";
import { ScreenProps } from "expo-router/build/useScreens";
import { TextInput } from "react-native";
import ChatPageInput from "@/components/chats_page/chat_input";
const styles = StyleSheet.create({
    tabBar: {
    }
})
export default function PrivateChat (): ReactElement {
    const colorScheme: ColorSchemeName = useColorScheme();
    const navigation = useNavigation();

    useEffect((): () => void => {
        const tabScreen = navigation.getParent();
        const mainScreen = tabScreen?.getParent();
        mainScreen?.setOptions({ headerShown: false, })
        tabScreen?.setOptions({ tabBarStyle: { display: "none" }, })


        return (): void => {
            mainScreen?.setOptions({ headerShown: true, })
            tabScreen?.setOptions({ tabBarStyle: { display: "flex" }, })
        }
    }, [])

    return (
        <GestureScreenContainer >
            <SafeAreaView>

                <ImageBackground className="w-screen h-screen " source={colorScheme == "dark" ? Images.images.chatBackgroundDark : Images.images.chatBackgroundLight}>
                    <View className="w-screen h-20 flex-row justify-items-start items-center space-x-2 bg-iblue pt-4">
                        <TouchableOpacity onPress={(): void => router.back()} className="flex-row items-center space-x-1 ml-2 bg-transparent">
                            <FontAwesome6 name="arrow-left" size={20} color="white" />
                            <View className={`w-12 h-12 rounded-full  overflow-hidden bg-white`}>
                                <Image source={Images.images.userPlaceholder} className="w-12 h-12" style={{ resizeMode: "contain" }} />
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity className="bg-transparent" >
                            <Text className="text-white">+258 86 084 2024</Text>
                            <Text className="text-white">Online</Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView className="space-y-4 mt-3" scrollsToTop>
                        <ChatPage.Root>
                            <ChatPage.Message message="bebida" />
                            <ChatPage.Footer dateSent="10:20" />
                        </ChatPage.Root>
                        <View className="h-5"></View>
                        <ChatPage.Root>
                            <ChatPage.Message message="oi " />
                            <ChatPage.Footer dateSent="21:33" />
                        </ChatPage.Root>
                    </ScrollView>
                    <ChatPageInput.MessageInput></ChatPageInput.MessageInput>
                </ImageBackground>
            </SafeAreaView>
        </GestureScreenContainer>
    )
}