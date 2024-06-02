import { ImagePickerAsset, ImagePickerOptions, ImagePickerResult, launchCameraAsync, launchImageLibraryAsync } from "expo-image-picker";

export class ImagePicker {
    public static async pickImageFromGallery (imageOptions: ImagePickerOptions): Promise<ImagePickerAsset[] | void> {
        const result: ImagePickerResult = await launchImageLibraryAsync(imageOptions);
        if (result.canceled) {
            return;
        }

        return result.assets;
    }

    public static async pickImageFromCamera (imageOptions: ImagePickerOptions): Promise<ImagePickerAsset[] | void> {
        const result: ImagePickerResult = await launchCameraAsync(imageOptions);
        if (result.canceled) {
            return;
        }

        return result.assets;
    }
}
