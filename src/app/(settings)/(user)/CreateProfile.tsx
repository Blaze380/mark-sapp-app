import { ActivityIndicator, BottomTextInput, GestureHandlerRootView, ImageLogo, InfiniteLoading, Modal, Text, TouchableOpacity, View } from "@/components/Themed";
import Button from "@/components/buttons/Button";
import ScreenContainer from "@/components/screen_container/ScreenContainer";
import Colors from "@/constants/Colors";
import Styles from "@/constants/Styles";
import { MutableRefObject, ReactElement, useEffect, useRef, useState } from "react";
import { ColorSchemeName, Image, useColorScheme } from "react-native";
import * as NetworkValidation from "@/utils/NetworkValidation"
import Images from "@/constants/Images";
import { MaterialIcons } from '@expo/vector-icons';
import { Alert } from "react-native";
import axios, { AxiosResponse, HttpStatusCode } from "axios";
import { Env } from "@/constants/Env";
import { CameraType, ImagePickerResult, MediaTypeOptions, launchCameraAsync, launchImageLibraryAsync } from 'expo-image-picker';
import BottomSheet, { BottomSheetProps } from '@gorhom/bottom-sheet';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Storages } from "@/constants/Storages";
import { useNavigation } from "expo-router";
import { AppScreenNavigationProp } from "../../../../types";
import { Screens } from "@/constants/Screens";

type ImageUploadProps = {
    uri: string;
    type: string;
    name: string;
}

export default function CreateProfile (): ReactElement {
    const imageChoosingRef = useRef<BottomSheet>(null)
    const colorScheme: ColorSchemeName = useColorScheme();
    const [profilePhoto, setUserProfilePhoto] = useState<ImageUploadProps>({} as ImageUploadProps);
    const [userName, setUserName] = useState<string>("");
    const [createUser, setCreateUser] = useState<boolean>(false);
    const [loadingImage, setLoadingImage] = useState<boolean>(false);
    let insertEmoji;
    let placeholderImg;

    useEffect((): void => {
        imageChoosingRef.current?.close()
    }, [])
    if (colorScheme === 'light') {
        insertEmoji = Colors.light.text;
        placeholderImg = Images.images.uploadProfileDark;
    } else {
        insertEmoji = Colors.dark.text;
        placeholderImg = Images.images.uploadProfile;

    }
    async function pickImageFromLibrary (): Promise<void> {
        imageChoosingRef.current?.close()
        let result: ImagePickerResult = await launchImageLibraryAsync({
            mediaTypes: MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1,
            allowsMultipleSelection: false,
        });
        if (!result.canceled) {
            setLoadingImage(true);
            profilePhoto.uri = result.assets[0].uri;
            setUserProfilePhoto(profilePhoto);
            setLoadingImage(false);
        }
    }
    async function pickImageFromCamera (): Promise<void> {
        imageChoosingRef.current?.close()
        const result: ImagePickerResult = await launchCameraAsync({
            allowsEditing: true,
            aspect: [4, 4],
            cameraType: CameraType.front,
            quality: 1,
            mediaTypes: MediaTypeOptions.Images,
        })
        if (!result.canceled) {
            setLoadingImage(true);
            profilePhoto.uri = result.assets[0].uri as string;
            profilePhoto.name = result.assets[0].fileName as string;
            profilePhoto.type = result.assets[0].type as string;
            setUserProfilePhoto(profilePhoto);
            setLoadingImage(false);

        }

    }
    function createNewUser (): void {
        if (!NetworkValidation.isNotConnectedToInternet()) {
            NetworkValidation.errorConnectionMessage(createNewUser);
            return;
        }
        setCreateUser(true);
        createUserProfile(userName, profilePhoto);
    }

    return (
        <GestureHandlerRootView >
            <View className="w-full h-full justify-center items-center flex">
                <View className="flex justify-center items-center mb-16" style={{ flex: 2 }}>
                    <View className="flex justify-center items-center space-y-20 mb-10">
                        <Text lightColor={Colors.light.text} darkColor={Colors.dark.text} style={Styles.title}>Informação do perfil</Text>
                        <Text lightColor={Colors.light.text} darkColor={Colors.dark.text} style={Styles.text}>Por favor forneça o seu nome e um foto de perfil opcional</Text>
                    </View>
                    <TouchableOpacity onPress={(): void => { imageChoosingRef.current?.expand() }} disabled={loadingImage ? true : false}>
                        <View className={` rounded-full w-40  h-40 flex justify-center items-center`} style={{ backgroundColor: "#0F87BF" }}>
                            {loadingImage ? (<InfiniteLoading style={{ width: 150, height: 150 }} darkImage={Images.icons.infinityLoadingDark} lightImage={Images.icons.infinityLoadingDark}></InfiniteLoading>) : <Image className={`w-${ profilePhoto ? "full" : '20' } ${ profilePhoto ? 'rounded-full' : '' } h-${ profilePhoto ? "full" : '20' }`} source={profilePhoto ? { uri: profilePhoto.uri } : placeholderImg} />}
                        </View>
                    </TouchableOpacity>
                    <View className="flex flex-row space-x-3 justify-center items-center mt-16 ">
                        <BottomTextInput className="w-96  text-lg" placeholder="Digite o seu nome aqui" value={userName} onChangeText={(text: string): void => setUserName(text)} />
                        <MaterialIcons name="insert-emoticon" size={40} color={insertEmoji} onPress={(): void => Alert.alert("Informação", "Essa feature estará disponível nas próximas atualizações")} />
                    </View>
                </View>
                <View style={{ flex: 1 }}>
                    <Button onPress={(): void => { createNewUser() }} text="Próximo" />
                </View>
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
            <BottomSheet index={0} snapPoints={['40%']} enableHandlePanningGesture enableOverDrag enablePanDownToClose ref={imageChoosingRef} >
                <View className="flex flex-col w-full h-full items-center justify-center ">
                    <Text className=" mt-10" style={Styles.title} lightColor={Colors.light.text} darkColor={Colors.dark.text}>Selecione uma Imagem</Text>

                    <View className="flex flex-row w-full h-56 items-center justify-around">
                        {/* Camera */}
                        <TouchableOpacity className="flex flex-col items-center justify-center" onPress={pickImageFromCamera}>
                            <MaterialCommunityIcons name="camera-plus" size={60} color={insertEmoji} />
                            <Text style={Styles.text} lightColor={Colors.light.text} darkColor={Colors.dark.text}>Camera</Text>
                        </TouchableOpacity>

                        {/* Lib */}
                        <TouchableOpacity className="flex flex-col items-center justify-center" onPress={pickImageFromLibrary}>
                            <MaterialCommunityIcons name="file-image-plus" size={60} color={insertEmoji} />
                            <Text style={Styles.text} lightColor={Colors.light.text} darkColor={Colors.dark.text}>Galeria</Text>
                        </TouchableOpacity>

                    </View>
                    <View className="-mt-10">
                        <Button onPress={(): void => { imageChoosingRef.current?.close() }} text="Fechar" />
                    </View>
                </View>
            </BottomSheet>
        </GestureHandlerRootView>


    )
}


async function createUserProfile (userName: string, profilePhoto: ImageUploadProps): Promise<void> {
    const userId: string = await AsyncStorage.getItem(Storages.TEMP_USER_ID) as string;
    const userPhoneNumber: string = await AsyncStorage.getItem(Storages.VALIDATION_PHONE_NUMBER) as string;

    sendUserData(userId, userName, userPhoneNumber)
    sendProfilePhoto(userId, profilePhoto);

    const navigation = useNavigation<AppScreenNavigationProp>()
    navigation.navigate(Screens.HOME_CHAT);
}
async function sendProfilePhoto (userId: string, profilePhoto: any): Promise<void> {
    const form: FormData = new FormData();
    form.append("profilePhoto", profilePhoto);
    const url: string = Env.BACKEND_API + `/upload-profile-photo/?id=${ userId }`;
    const res: AxiosResponse = await axios.postForm(url, form);
    if (res.status !== HttpStatusCode.Ok) {
        throw new Error("Algo deu errado!");
    }

}
async function sendUserData (userId: string, userName: string, userPhoneNumber: string): Promise<void> {
    const url: string = Env.BACKEND_API + "/user/update-user";
    const data = {
        id: userId,
        userName: userName,
        phoneNumber: userPhoneNumber,
    }
    const res: AxiosResponse = await axios.post(url, data);
    if (res.status !== HttpStatusCode.Ok) {
        throw new Error("Algo deu errado!");
    }
}