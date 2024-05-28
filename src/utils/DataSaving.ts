
import { Storages } from '@/constants/Storages';
import * as SecureStore from 'expo-secure-store';
export async function saveUserPhoneNumber (phoneNumber: string): Promise<void> {
    await SecureStore.setItemAsync(Storages.VALIDATION_PHONE_NUMBER, phoneNumber);
}

export async function getUserPhoneNumber (): Promise<string> {
    return await SecureStore.getItemAsync(Storages.VALIDATION_PHONE_NUMBER) as string;
}

export async function saveUserName (userName: string): Promise<void> {
    await SecureStore.setItemAsync(Storages.USERNAME, userName);
}


export async function getUserName (): Promise<string> {
    return await SecureStore.getItemAsync(Storages.USERNAME) as string;
}
export async function saveUserID (userId: string): Promise<void> {
    await SecureStore.setItemAsync(Storages.USER_ID, userId);
}


export async function getUserId (): Promise<string> {
    return await SecureStore.getItemAsync(Storages.USER_ID) as string;
}
export async function saveUserAuthToken (authToken: string): Promise<void> {
    await SecureStore.setItemAsync(Storages.AUTH_TOKEN, authToken);
}


export async function getUserAuthToken (): Promise<string> {
    return await SecureStore.getItemAsync(Storages.AUTH_TOKEN) as string;
}
export async function saveIsLogged (isLogged: boolean): Promise<void> {
    await SecureStore.setItemAsync(Storages.IS_LOGGED, isLogged + '');
}


export async function getIsLogged (): Promise<boolean> {
    const data: string | null = await SecureStore.getItemAsync(Storages.IS_LOGGED);
    if (data) {
        if (data === 'true') {
            return true;
        }
    }
    return false;
}
