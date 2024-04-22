import { Text } from "@/components/Themed";
import GestureScreenContainer from "@/components/screen_container/GestureScreenContainer";
import { ReactElement } from "react";
import { ScrollView } from "react-native-gesture-handler";

export default function Status (): ReactElement {
    return (
        <GestureScreenContainer>
            <ScrollView>
                <Text className="text-lg">Status</Text>
            </ScrollView>
        </GestureScreenContainer>
    )
}