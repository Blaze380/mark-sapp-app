import { BottomTextInput, GestureHandlerRootView, ImageLogo, InfiniteLoading, Modal, Text, TouchableOpacity, View } from "@/components/Themed";
import Button from "@/components/buttons/Button";
import Colors from "@/constants/Colors";
import { ReactElement, RefObject, SetStateAction, useEffect, useRef, useState } from "react";
import { ColorSchemeName, Image, StyleProp, ViewStyle, useColorScheme } from "react-native";
import * as NetworkValidation from "@/utils/NetworkValidation"
import Images from "@/constants/Images";
import { MaterialIcons } from '@expo/vector-icons';
import { Alert } from "react-native";
import axios, { AxiosResponse, HttpStatusCode } from "axios";
import { Env } from "@/constants/Env";
import { CameraType, ImagePickerAsset, ImagePickerOptions, ImagePickerResult, MediaTypeOptions, getPendingResultAsync, launchCameraAsync, launchImageLibraryAsync, requestCameraPermissionsAsync, requestMediaLibraryPermissionsAsync } from 'expo-image-picker';
import BottomSheet from '@gorhom/bottom-sheet';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation } from "expo-router";
import { AppScreenNavigationProp } from "../../../types";
import { Screens } from "@/constants/Screens";
import { getUserAuthToken, getUserId, getUserPhoneNumber, saveUserAuthToken, saveUserID } from "@/utils/DataSaving";
import IconButton from "@/components/buttons/IconButton";
import { ImagePicker } from "@/utils/camera/ImagePicker";

type ImageUploadProps = {
    uri: string;
    type: string;
    name: string;
    fileName: string;
    size: number;
}
const imageOptions: ImagePickerOptions = {
    mediaTypes: MediaTypeOptions.Images,
    allowsEditing: false,
    aspect: [4, 4],

}
const imageFromGalleryOptions: ImagePickerOptions = {
    ...imageOptions,
    allowsMultipleSelection: false,
}
const imageFromCameraOptions: ImagePickerOptions = {
    ...imageOptions,
    cameraType: CameraType.front,
}
export default function CreateProfile (): ReactElement {
    const navigation: any = useNavigation<AppScreenNavigationProp>()
    const imageChoosingRef = useRef<BottomSheet>(null)
    const colorScheme: ColorSchemeName = useColorScheme();
    const [profilePhoto, setProfilePhoto] = useState<ImageUploadProps>({} as ImageUploadProps);
    const [userName, setUserName] = useState<string>("");
    const [canCreateUser, setCanCreateUser] = useState<boolean>(false);
    const [isLoadingImage, setIsLoadingImage] = useState<boolean>(true);
    let showImageLoading: "flex" | "none" = "none";
    let hidePlaceholder: "flex" | "hidden" = "flex";
    let insertEmoji: string = "";
    let placeholderImg;

    useEffect((): void => imageChoosingRef.current?.close(), []);

    if (colorScheme === 'light') {
        insertEmoji = Colors.light.text;
        placeholderImg = Images.images.uploadProfileDark;
    } else {
        insertEmoji = Colors.dark.text;
        placeholderImg = Images.images.uploadProfile;

    }

    async function pickImage (options: "from-gallery" | "from-camera"): Promise<void> {
        imageChoosingRef.current?.close()
        let image: void | ImagePickerAsset[];
        switch (options) {
            case "from-camera":
                await requestCameraPermissionsAsync()
                image = await ImagePicker.pickImageFromCamera(imageFromCameraOptions);
                break;
            case "from-gallery":
                await requestMediaLibraryPermissionsAsync();
                image = await ImagePicker.pickImageFromGallery(imageFromGalleryOptions);
                break;
        }
        if (!image) return;
        if (!image[0]) return;

        //setInterval((): void => console.log(image[1]), 3000);
        showImageLoading = "flex"
        hidePlaceholder = "hidden"
        setImagePayload(image[0], setProfilePhoto, setIsLoadingImage);
        hidePlaceholder = "flex"
        showImageLoading = "none";
    }

    if (canCreateUser) {
        createUserProfile(userName, profilePhoto, navigation);
    }

    return (
        <GestureHandlerRootView >
            <View className="w-full h-full justify-center items-center flex">
                <View className="flex justify-center items-center mb-16" style={{ flex: 4 }}>
                    <View className="flex justify-center items-center space-y-20 mb-4">
                        <Text lightColor={Colors.light.text} darkColor={Colors.dark.text} className="text-title font-bold">Informação do perfil</Text>
                        <Text lightColor={Colors.light.text} darkColor={Colors.dark.text} className="text-text">Por favor forneça o seu nome e um foto de perfil opcional</Text>
                    </View>
                    <TouchableOpacity onPress={(): void => { imageChoosingRef.current?.expand() }} disabled={isLoadingImage ? true : false}>
                        <View className={` rounded-full w-28  h-28 flex justify-center items-center bg-iblue`}>
                            {/* {isLoadingImage ? (<InfiniteLoading style={{ width: 100, height: 100, }}  darkImage={Images.icons.infinityLoadingDark} lightImage={Images.icons.infinityLoadingDark} />) : <Image className={`w-${ profilePhoto ? "full" : '20' } ${ profilePhoto && 'rounded-full' } h-${ profilePhoto ? "full" : '20' }`} source={profilePhoto ? { uri: profilePhoto.uri } : placeholderImg} />} */}
                            <InfiniteLoading style={{ width: 100, height: 100, display: showImageLoading }} darkImage={Images.icons.infinityLoadingDark} lightImage={Images.icons.infinityLoadingDark} />
                            <Image className={`w-${ profilePhoto.uri ? "full" : '20' } ${ profilePhoto.uri && 'rounded-full' } ${ hidePlaceholder } h-${ profilePhoto.uri ? "full" : '20' }`} source={profilePhoto.uri ? { uri: profilePhoto.uri } : placeholderImg} />
                        </View>
                    </TouchableOpacity>
                    <View className="flex flex-row space-x-3 justify-center items-center mt-16 ">
                        <BottomTextInput className="w-56  text-text" placeholder="Digite o seu nome aqui" value={userName} onChangeText={(text: string): void => setUserName(text)} />
                        <MaterialIcons name="insert-emoticon" size={30} color={insertEmoji} onPress={(): void => Alert.alert("Informação", "Essa feature estará disponível nas próximas atualizações")} />
                    </View>
                </View>
                <View className="flex-1">
                    <Button onPress={(): Promise<void> => createNewUser(setCanCreateUser)} text="Próximo" />
                </View>
            </View>

            {/* CREATING USER MODAL */}
            <Modal visible={canCreateUser} className="flex justify-center items-center" lightColor={Colors.light.background} darkColor={Colors.dark.background}>
                <View className="flex-1 justify-center items-center">
                    <Text className="mb-10 text-title font-bold" lightColor={Colors.light.text} darkColor={Colors.dark.text}>Aguarde por favor...</Text>
                    <ImageLogo className="w-[300] h-[300] resize-[contain]" />
                    <InfiniteLoading style={{ width: 140, height: 140 }} darkImage={Images.icons.infinityLoadingDark} lightImage={Images.icons.infinityLoadingLight}></InfiniteLoading>
                </View>
            </Modal>

            {/* IMAGE CHOOSING OPTIONS */}
            <BottomSheet index={0} snapPoints={['40%']} enableHandlePanningGesture enableOverDrag enablePanDownToClose ref={imageChoosingRef} >
                <View className="flex flex-col w-full h-full items-center justify-center ">
                    <Text className=" text-title font-bold" lightColor={Colors.light.text} darkColor={Colors.dark.text}>Selecione uma Imagem</Text>

                    <View className="flex flex-row w-full h-36 items-center justify-around">
                        {/* Camera */}
                        <IconButton
                            text="Camera"
                            onClick={(): Promise<void> => pickImage("from-camera")}
                            Icon={MaterialCommunityIcons}
                            iconProps={{ color: insertEmoji, name: "camera-plus", size: 40 }}
                        />

                        {/* Lib */}
                        <IconButton
                            text="Galeria"
                            onClick={(): Promise<void> => pickImage("from-gallery")}
                            Icon={MaterialCommunityIcons}
                            iconProps={{ color: insertEmoji, name: "file-image-plus", size: 40 }} />

                    </View>
                    <View className="">
                        <Button onPress={(): void => { imageChoosingRef.current?.close() }} text="Fechar" />
                    </View>
                </View>
            </BottomSheet>
        </GestureHandlerRootView>


    )
}


async function createUserProfile (userName: string, profilePhoto: ImageUploadProps, navigation: any): Promise<void> {
    const userPhoneNumber: string = (await getUserPhoneNumber()).replaceAll(" ", "");
    try {
        await sendUserData(userName, userPhoneNumber);
        if (!profilePhoto) return;
        const userId: string = await getUserId();
        const authToken: string = await getUserAuthToken();
        await sendProfilePhoto(userId, profilePhoto, authToken);
    } catch (error) {
        console.error(error);
        Alert.alert("Erro", "Os nossos servidores are not reachable, try again later.")
        navigation.navigate(Screens.WELCOME);
        return;
    }


    navigation.navigate(Screens.WELCOME.MAIN_TAB.INDEX);
}
async function sendProfilePhoto (userId: string, profilePhoto: ImageUploadProps, authToken: string): Promise<void> {
    const form: FormData = new FormData();
    profilePhoto.type = "image/jpg";
    form.append("profilePhoto", JSON.stringify(profilePhoto));
    const url: string = Env.BACKEND_API + `/user/upload-profile-photo?id=${ userId }`;
    const res: AxiosResponse = await axios.postForm(url, form, { headers: { Authorization: `Bearer ${ authToken }` } });
    // if (res.status !== HttpStatusCode.Created || res.status !== HttpStatusCode.Ok ) {
    //     throw new Error("Algo deu errado!2");
    // }

}
async function sendUserData (userName: string, userPhoneNumber: string): Promise<void> {
    const url: string = Env.BACKEND_API + "/user/save-user";
    const data = {
        userName: userName,
        phoneNumber: userPhoneNumber,
    }
    const res: AxiosResponse = await axios.post(url, data)
    saveUserID(res.data.userId);
    saveUserAuthToken(res.data.accessToken);
    if (res.status !== HttpStatusCode.Created) {
        console.log(res.data + ' somethin')
        throw new Error("Algo deu errado!");
    }
}
function setImagePayload (image: ImagePickerAsset, setImageFunction: (value: SetStateAction<ImageUploadProps>) => void, setIsLoadingImage: (value: SetStateAction<boolean>) => void) {
    setIsLoadingImage(true);
    setImageFunction({
        fileName: image.fileName as string,
        name: image.fileName as string,
        uri: image.uri as string,
        type: image.type as string,
        size: image.fileSize as number,
    });
    setIsLoadingImage(false);
}
async function createNewUser (setCanCreateUser: (value: SetStateAction<boolean>) => void): Promise<void> {
    if (await NetworkValidation.isNotConnectedToInternet()) {
        NetworkValidation.errorConnectionMessage((): Promise<void> => createNewUser(setCanCreateUser));
        return;
    }
    setCanCreateUser(true);

}