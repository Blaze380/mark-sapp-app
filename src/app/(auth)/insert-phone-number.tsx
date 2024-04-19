import { PhoneNumberInput, StatusBar, Text,  View } from "@/components/Themed";
import Button from "@/components/buttons/Button";
import LinkButton from "@/components/buttons/LinkButton";
import ScreenContainer from "@/components/screen_container/ScreenContainer";
import Colors from "@/constants/Colors";
import { MutableRefObject, ReactElement, useEffect, useRef, useState } from "react";
import { Alert, NativeSyntheticEvent,  TextInputChangeEventData } from "react-native";
import { AppScreenNavigationProp } from "../../../types";
import { useNavigation } from "expo-router";
import { Screens } from "@/constants/Screens";
import ModalLoading from "@/components/loadings/ModalLoading";
import axios, { AxiosResponse } from "axios";
import { PhoneNumberValidation } from "@/types/PhoneNumberValidation";

export default function InsertPhoneNumber():ReactElement {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [loadingVisible, setLoadingVisible] = useState<boolean>(false);
    const navigation = useNavigation<AppScreenNavigationProp>();
  function handlePhoneChange (phoneNumberInput: string): void {
    console.log(phoneNumberInput.length);
    console.log(phoneNumber.length);

    const numberSpace: string = "  ";
    if (!phoneNumberInput.length) {
      return;
    }

    if (phoneNumberInput.length === 0) {
      setPhoneNumber("");
      return;
    }
    if (phoneNumberInput.length > 13) {
      return
    }

    if ((phoneNumberInput.length < phoneNumber.length) && (phoneNumberInput.length!==0)) {
      phoneNumberInput = phoneNumberInput.substring(0, phoneNumberInput.length - 1);
      setPhoneNumber(phoneNumberInput);
      return;
    }

    if (phoneNumberInput.length === 1) {
      setPhoneNumber(phoneNumberInput)
    } else if (phoneNumberInput.length === 2) {
      setPhoneNumber(phoneNumberInput + numberSpace);
    } else if (phoneNumberInput.length >= 3 && phoneNumberInput.length <= 6) {
      setPhoneNumber(phoneNumberInput);
    } else if (phoneNumberInput.length === 7) {
      setPhoneNumber(phoneNumberInput + numberSpace);
    } else if (phoneNumberInput.length > 7) {
      setPhoneNumber(phoneNumberInput);
    }
  }
  async function confirmPhoneNumber (): Promise<void>{
    const validNumber: string = phoneNumber.replace("+", "").replace(" ", "").replace(" ", "").replace(" ", "").replace(" ", "");

    if (validNumber.length < 1) {
      return;
    }
    setLoadingVisible(true);
    const isValid: boolean = await validatePhoneNumber(validNumber);
    setLoadingVisible(false);
    if (isValid) {
      nextStepAlert(navigation, phoneNumber);
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
          <Button onPress={confirmPhoneNumber} text="Próximo"/>
        </View>
      <ModalLoading visible={ loadingVisible} />
      <StatusBar />
    </ScreenContainer>
  );
}
function nextStepAlert (navigation:any,phoneNumber:string) {
        Alert.alert("Confirmação!", `Você confirma que ${ phoneNumber } realmente é o seu número?`, [
      {
        text: "Editar",
        style:"cancel",
      },
      {
        text: "Ok",
        style:"destructive",
        onPress: (): void => {
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
  const phoneNumberValidationUrl:string =`https://phonevalidation.abstractapi.com/v1/?api_key=83aa9bb1af504576aa605295db6058f4&phone=${phoneNumber}`
  return await axios.get(phoneNumberValidationUrl).then((res:AxiosResponse) :boolean=> {
    const data: PhoneNumberValidation = res.data;
    return data.valid;
  })

}