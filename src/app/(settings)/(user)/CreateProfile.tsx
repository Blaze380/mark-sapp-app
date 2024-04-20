import { ActivityIndicator, BottomTextInput, ImageLogo, InfiniteLoading, Modal, Text, TouchableOpacity, View } from "@/components/Themed";
import Button from "@/components/buttons/Button";
import ScreenContainer from "@/components/screen_container/ScreenContainer";
import Colors from "@/constants/Colors";
import Styles from "@/constants/Styles";
import { MutableRefObject, ReactElement, useRef, useState } from "react";
import { ColorSchemeName, Image, useColorScheme } from "react-native";
import * as NetworkValidation from "@/utils/NetworkValidation"
import Images from "@/constants/Images";
import { MaterialIcons } from '@expo/vector-icons';
import { Alert } from "react-native";
import axios, { AxiosResponse } from "axios";
import { Env } from "@/constants/Env";
import { CameraType, ImagePickerResult, MediaTypeOptions, launchCameraAsync, launchImageLibraryAsync } from 'expo-image-picker';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
export default function CreateProfile (): ReactElement {
    const colorScheme: ColorSchemeName = useColorScheme();
    const [profilePhoto, setUserProfilePhoto] = useState<string>("");
    const [userName, setUserName] = useState<string>("");
    const [createUser, setCreateUser] = useState<boolean>(false);
    const [loadingImage, setLoadingImage] = useState<boolean>(false);
    let insertEmoji;
    let placeholderImg;
    if (!profilePhoto) {
        if (colorScheme === 'light') {
            insertEmoji = Colors.light.text;
            placeholderImg = Images.images.uploadProfileDark;
        } else {
            insertEmoji = Colors.dark.text;
            placeholderImg = Images.images.uploadProfile;

        }
    }
    async function pickImageFromLibrary (): Promise<void> {
        let result: ImagePickerResult = await launchImageLibraryAsync({
            mediaTypes: MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1,
            allowsMultipleSelection: false,
        });
        if (!result.canceled) {
            setLoadingImage(true);
            setUserProfilePhoto(result.assets[0].uri);
            setLoadingImage(false);
        }
    }
    async function pickImageFromCamera (): Promise<void> {
        const result: ImagePickerResult = await launchCameraAsync({
            allowsEditing: true,
            aspect: [4, 4],
            cameraType: CameraType.front,
            quality: 1,
            mediaTypes: MediaTypeOptions.Images,
        })
        if (!result.canceled) {
            setLoadingImage(true);
            setUserProfilePhoto(result.assets[0].uri);
            setLoadingImage(false);

        }

    }

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <ScreenContainer >
                <View style={{ flex: 2 }} className="flex justify-center items-center mb-16">
                    <View className="flex justify-center items-center space-y-20 mb-10">
                        <Text lightColor={Colors.light.text} darkColor={Colors.dark.text} style={Styles.title}>Informação do perfil</Text>
                        <Text lightColor={Colors.light.text} darkColor={Colors.dark.text} style={Styles.text}>Por favor forneça o seu nome e um foto de perfil opcional</Text>
                    </View>
                    <TouchableOpacity onPress={pickImageFromLibrary} disabled={loadingImage ? true : false}>
                        <View className={` rounded-full w-40  h-40 flex justify-center items-center`} style={{ backgroundColor: "#0F87BF" }}>
                            {loadingImage ? (<InfiniteLoading style={{ width: 150, height: 150 }} darkImage={Images.icons.infinityLoadingDark} lightImage={Images.icons.infinityLoadingDark}></InfiniteLoading>) : <Image className={`w-${ profilePhoto ? "full" : '20' } ${ profilePhoto ? 'rounded-full' : '' } h-${ profilePhoto ? "full" : '20' }`} source={profilePhoto ? { uri: profilePhoto } : placeholderImg} />}
                        </View>
                    </TouchableOpacity>
                    <View className="flex flex-row space-x-3 justify-center items-center mt-16 ">
                        <BottomTextInput className="w-96  text-lg" placeholder="Digite o seu nome aqui" value={userName} onChangeText={(text: string): void => setUserName(text)} />
                        <MaterialIcons name="insert-emoticon" size={40} color={insertEmoji} onPress={(): void => Alert.alert("Informação", "Essa feature estará disponível nas próximas atualizações")} />
                    </View>
                </View>
                <View style={{ flex: 1 }}>
                    <Button onPress={(): void => { setCreateUser(true), NetworkValidation.validateConnection(createUserProfile) }} text="Próximo" />
                </View>
                {/* CREATING USER MODAL */}
                <Modal visible={createUser} className="flex justify-center items-center" lightColor={Colors.light.background} darkColor={Colors.dark.background}>
                    <View className="flex justify-center items-center" style={{ flex: 1 }}>
                        <Text className="mb-10" style={Styles.title} lightColor={Colors.light.text} darkColor={Colors.dark.text}>Aguarde por favor...</Text>
                        <ImageLogo style={{ width: 500, height: 500, resizeMode: "contain" }} />
                        <InfiniteLoading style={{ width: 200, height: 200 }} darkImage={Images.icons.infinityLoadingDark} lightImage={Images.icons.infinityLoadingLight}></InfiniteLoading>
                    </View>
                </Modal>
                {/* IMAGE CHOOSING OPTIONS */}
                <Modal>

                </Modal>

            </ScreenContainer>
        </GestureHandlerRootView>

    )
}


async function createUserProfile (): Promise<void> {
    const form: FormData = new FormData();
    //TODO userId missing
    form.append("id", "userId");
    form.append("profilePhoto", '');
    const url: string = Env.BACKEND_API + "";
    //const res: AxiosResponse;
    axios.postForm(url, form,);

}
function sendProfilePhoto (): void {
    const form: FormData = new FormData();
    //TODO userId missing
    form.append("id", "userId");
    form.append("profilePhoto", '');
    const url: string = Env.BACKEND_API + "";
    //const res: AxiosResponse;
    axios.post(url, form, {

    });

}
async function sendUserData (): Promise<void> {
    const url: string = Env.BACKEND_API + "/user/update-user";
    const data = {
        id: "",
        userName: "",
        phoneNumber: ""
    }
    const res: AxiosResponse = await axios.post(url, data);
}