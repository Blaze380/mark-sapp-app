import { Text } from "@/components/Themed";
import GestureScreenContainer from "@/components/screen_container/GestureScreenContainer";
import StatusCard from "@/components/status/StatusCard";
import { ReactElement } from "react";
import { ScrollView } from "react-native-gesture-handler";

export default function Status (): ReactElement {
    return (
        <GestureScreenContainer>
            <ScrollView className="w-full h-full mt-4 ml-5">
                <Text className="text-title font-bold  mb-5">Atualizações Recentes</Text>
                <StatusCard userName={"Blaze:/"} time={"1 Minuto"} image={require('@/assets/images/status/blaze.png')} />
                <StatusCard userName={"Se Inscreva"} time={"29 Segundos"} image={require('@/assets/images/status/vegapunk.png')} />
                <StatusCard userName={"Joãozinh 123"} time={"23 Horas"} image={require('@/assets/images/status/luffy.png')} />
                <StatusCard userName={"Notch"} time={"Agora"} image={require('@/assets/images/status/notch.png')} />
                <StatusCard userName={"Herobrine"} time={"15 Anos"} image={require('@/assets/images/status/herobrine.png')} />
                <StatusCard userName={"Joana"} time={"6 Horas"} image={require('@/assets/images/status/creeper.png')} />
            </ScrollView>
        </GestureScreenContainer>
    )
}