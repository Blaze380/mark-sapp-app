import { OtpCodeInput, Text, View } from "@/components/Themed";
import ModalLoading from "@/components/loadings/ModalLoading";
import ScreenContainer from "@/components/screen_container/ScreenContainer";
import Colors from "@/constants/Colors";
import { Env } from "@/constants/Env";
import { Screens } from "@/constants/Screens";
import { Storages } from "@/constants/Storages";
import Styles from "@/constants/Styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios, { AxiosResponse, HttpStatusCode } from "axios";
import { Link } from "expo-router";
import { ReactElement, useState, } from "react";
import { Alert } from "react-native";


export default function ValidateOtpCode (): ReactElement {
    const [otpCode, setOtpCode] = useState("");
    const [loadingVisible, setLoadingVisible] = useState<boolean>(false);
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    async function getPhone (): Promise<void> {
        const phone: string = await getPhoneNumber();
        setPhoneNumber(phone);
    }
    getPhone();
    async function validateOtp (text: string): Promise<void> {
        if (text.length < 6) {
            setOtpCode(text)
            return;
        }
        if (text.length >= 6) {
            try {
                setLoadingVisible(true);
                let response: AxiosResponse<any, any> = await validateCode(text, phoneNumber);

                setLoadingVisible(false);
                if (response.status === HttpStatusCode.Created) {
                    Alert.alert("Successo!", "Verificado com sucesso!");
                    //TODO VALIDATE IT
                    console.log(response.data);
                    const userId: string = response.data.userId;
                    const authToken: string = response.data.access_token;
                    AsyncStorage.setItem(Storages.TEMP_USER_ID, userId);
                    AsyncStorage.setItem(Storages.AUTH_TOKEN, authToken);
                } else if ((response.status !== HttpStatusCode.Created)) {
                    Alert.alert("Erro!", response.data.message);
                }
            } catch (error) {
                console.log(error)
                setLoadingVisible(false);
                Alert.alert("Erro ao validar o código!", "Os servidores da Marksapp podem estar Desligados e/ou em manutenção, tente mais tarde.");
            }
            //Request para Minha API
            //href={Screens.INSERT_PHONE_NUMBER} text="Número errado?"
        }
    }
    return (
        <ScreenContainer >
            <View className="flex justify-center items-center" style={{ flex: 1 }}>
                <View className="mb-10">
                    <Text className="text-center mb-5" style={Styles.title} lightColor={Colors.light.text} darkColor={Colors.dark.text}>Verificando o seu Número</Text>
                    <Text className="text-justify" style={Styles.text} lightColor={Colors.light.text} darkColor={Colors.dark.text}>Insira o código enviado para <Text className="font-bold">{phoneNumber}.</Text> <Link className="underline" href={`/${ Screens.INSERT_PHONE_NUMBER }`}>Número errado?</Link></Text>
                </View>
                <OtpCodeInput value={otpCode} onChangeText={(text: string): void => { validateOtp(text) }} className="w-72 h-10 border-b-2 mb-10" style={Styles.text} lightColor={Colors.light.text} darkColor={Colors.dark.text} />

                <Text className="" style={Styles.text} lightColor={Colors.light.text} darkColor={Colors.dark.text}>Insira código de 6 dígitos</Text>

            </View>
            <View style={{ flex: 1 }}></View>
            <ModalLoading visible={loadingVisible} text="Conectando" />
        </ScreenContainer>
    );
}


async function validateCode (code: string, phoneNumber: string): Promise<AxiosResponse<any, any>> {
    const data = {
        phoneNumber: phoneNumber,
        otpCode: code,
    }
    const url: string = `${ Env.BACKEND_API }/user/second-step/validate-code`
    const res: AxiosResponse = await axios.post(url, data)
    return res;


}

async function getPhoneNumber (): Promise<string> {
    let phoneNumber: string | null = await AsyncStorage.getItem(Storages.VALIDATION_PHONE_NUMBER);
    if (phoneNumber) {
        phoneNumber = phoneNumber.replaceAll(" ", "");
        return phoneNumber;
    } else {
        return "";
    }
}
