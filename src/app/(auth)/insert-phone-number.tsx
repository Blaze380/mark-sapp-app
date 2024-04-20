import { PhoneNumberInput, StatusBar, Text,  View } from "@/components/Themed";
import Button from "@/components/buttons/Button";
import ScreenContainer from "@/components/screen_container/ScreenContainer";
import Colors from "@/constants/Colors";
import {  ReactElement, useState } from "react";
import { Alert,    } from "react-native";
import { AppScreenNavigationProp } from "../../../types";
import { useNavigation } from "expo-router";
import { Screens } from "@/constants/Screens";
import ModalLoading from "@/components/loadings/ModalLoading";
import axios, { AxiosError, AxiosResponse } from "axios";
import { PhoneNumberValidation } from "@/types/PhoneNumberValidation";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Storages } from "@/constants/Storages";

import { Env } from "@/constants/Env";
import * as NetworkValidation from "@/utils/NetworkValidation";
export default function InsertPhoneNumber():ReactElement {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [loadingVisible, setLoadingVisible] = useState<boolean>(false);
  const navigation = useNavigation<AppScreenNavigationProp>();

  async function validateIt (): Promise<void>{
    await NetworkValidation.validateConnection(confirmPhoneNumber)
  }

  // async function validateConnection (): Promise<void>{
  //       const isNotConnected: boolean = await NetworkValidation.isNotConnectedToInternet();
  //   if(isNotConnected){
  //     Alert.alert("Falha na conexão!", "Houve falha tentando conectar ao servidores, verifique a sua internet.", [
  //       {
  //         isPreferred: true,
  //         text: "Tentar novamente",
  //         onPress() :void{
  //           validateConnection();
  //         },
  //       },
  //       {
  //         text:"Cancelar"
  //       }
  //     ])
  //     return;
  //   } else {
  //     confirmPhoneNumber()
  //   }
  // }

  async function confirmPhoneNumber (): Promise<void>{

    const validNumber: string = phoneNumber.replace("+", "").replace(" ", "").replace(" ", "").replace(" ", "").replace(" ", "");

    if (validNumber.length < 1) {
      return;
    }
    setLoadingVisible(true);
    const isValid: boolean = await validatePhoneNumber(validNumber);
    setLoadingVisible(false);
    if (isValid) {
     await  nextStepAlert(navigation, phoneNumber);
    } else {
      phoneNumberErrorAlert(phoneNumber);
    }

  }

  return (
    <ScreenContainer>
      <View className="flex items-center justify-center space-y-3 mb-32" style={{flex:5}}>
        <Text className="text-2xl"lightColor={Colors.dark.tint} darkColor={Colors.dark.text}>Verifique o seu Número de telefone</Text>
        <Text className="text-lg" lightColor={Colors.light.text} darkColor={Colors.dark.text}>O MarkSapp precisa de verificar a sua conta.</Text>

        <View className="flex flex-row justify-center items-center gap-5">
          {/* <PhoneNumberInput className="bg-red w-11 border-b-2 h-10 text-lg" value="+258" editable={false} lightColor={Colors.dark.tint} darkColor={Colors.light.tint}></PhoneNumberInput> */}
          <PhoneNumberInput className="bg-red w-56 border-b-2 h-10 text-lg" placeholder="Número de telefone" value={phoneNumber}  keyboardType="numeric" lightColor={Colors.dark.tint} darkColor={Colors.light.tint} onChangeText={(text:string)=>setPhoneNumber(text)}/>
        </View>
      </View>
        <View style={{flex:2}}>
          <Button onPress={validateIt} text="Próximo"/>
        </View>
      <ModalLoading visible={ loadingVisible} text="Conectando" />
      <StatusBar />
    </ScreenContainer>
  );
}
async function  nextStepAlert (navigation:any,phoneNumber:string) :Promise<void>{
        Alert.alert("Confirmação!", `Você confirma que ${ phoneNumber } realmente é o seu número?`, [
      {
        text: "Editar",
        style:"cancel",
      },
      {
        text: "Ok",
        style:"destructive",
        onPress: async (): Promise<void> => {
          const url:string =`${Env.BACKEND_API}/user/first-step/send-phone-number`
          try {
            await axios.post(url, { phoneNumber: phoneNumber }).then(res => console.log(res.status));
          } catch (error) {
            console.log(error);
            Alert.alert("Erro!", "Os servidores da Marksapp podem estar Desligados e/ou em manutenção, tente mais tarde.");
            return;
          }
           AsyncStorage.setItem(Storages.VALIDATION_PHONE_NUMBER, phoneNumber);
          navigation.navigate(Screens.VALIDATE_OTP_CODE)
          //TODO send code to twilliooooooooooo
        }
      }
    ])
}
function phoneNumberErrorAlert (phoneNumber: string): void{
    Alert.alert("Erro!", `O número que você inseriu não é válido. Número: ${ phoneNumber }`, [
      {
        text: "Ok",
        style:"cancel",
      },
    ])
}
async function validatePhoneNumber (phoneNumber: string): Promise<boolean>{
  const phoneNumberValidationUrl: string = Env.NUMBER_VALIDATION_API+ phoneNumber;
  return await axios.get(phoneNumberValidationUrl,).then((res:AxiosResponse) :boolean=> {
    const data: PhoneNumberValidation = res.data;
    return data.valid;
  })

}

