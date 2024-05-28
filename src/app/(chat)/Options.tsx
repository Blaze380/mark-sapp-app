import { Text, View } from "@/components/Themed";
import ScreenContainer from "@/components/screen_container/ScreenContainer";
import { Redirect } from "expo-router";

export default function Options () {
    return (
        <ScreenContainer>
            <View><Text>sfskfkm</Text></View>
            <Redirect href={'/(chat)/MainChatScreen'}></Redirect>
        </ScreenContainer>
    )
}