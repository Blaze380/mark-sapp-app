import { OtpCodeInput, View } from "@/components/Themed";
import ModalLoading from "@/components/loadings/ModalLoading";
import ScreenContainer from "@/components/screen_container/ScreenContainer";
import Colors from "@/constants/Colors";
import Styles from "@/constants/Styles";
import axios, { AxiosResponse, HttpStatusCode } from "axios";
import { ReactElement, useState, } from "react";
import { StyleSheet } from "react-native";
export default function ValidateOtpCode (): ReactElement{
    const [otpCode, setOtpCode] = useState("");
      const [loadingVisible, setLoadingVisible] = useState<boolean>(false);
    async function validateOtp (text: string): Promise<void> {
        if (text.length < 6) {
            setOtpCode(text)
            return;
        }
        if (text.length >= 6) {
            setLoadingVisible(true);
            //Arranjar phone number
            const response: AxiosResponse = await validateCode(text,);
            setLoadingVisible(false);
            if (response.status === HttpStatusCode.Created) {

            } else if (response.status === HttpStatusCode.Unauthorized) {

            } else if (response.status === HttpStatusCode.BadRequest) {

            }
            //Request para Minha API

        }
    }
    return (
        <ScreenContainer >
            <View className="flex justify-center items-center">
                <OtpCodeInput value={otpCode} onChangeText={(text:string):void=>{validateOtp(text)}} className="w-72 h-10 border-b-2" style={Styles.text} lightColor={ Colors.light.text} darkColor={Colors.dark.text} />
            </View>
            <ModalLoading visible={ loadingVisible} />
        </ScreenContainer>
    );
}


async function validateCode (code: string, phoneNumber: string): Promise<AxiosResponse>{
    const data ={
        phoneNumber: phoneNumber,
        otpCode:code,
    }
    return await axios.post("url", data)
        .then((res: AxiosResponse): AxiosResponse => {
            return res;
        });

}
