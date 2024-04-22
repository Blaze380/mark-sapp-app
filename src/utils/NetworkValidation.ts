import * as Network from 'expo-network';
import { Alert } from 'react-native';
export async function isNotConnectedToInternet (): Promise<boolean> {
    const isAirplaneModeEnabled: boolean = await Network.isAirplaneModeEnabledAsync();
    const networkState: Network.NetworkState = await Network.getNetworkStateAsync();
    console.log(isAirplaneModeEnabled);
    console.log(networkState);
    if ((isAirplaneModeEnabled && !networkState.isConnected && !networkState.isInternetReachable) || (!networkState.isConnected || !networkState.isInternetReachable)) {
        return true;
    } else {
        return false;
    }
}

export async function validateConnection (ifConnectionFunction: () => void | null): Promise<void> {
    const isNotConnected: boolean = await isNotConnectedToInternet();
    if (isNotConnected) {
        Alert.alert("Falha na conexão!", "Houve falha tentando conectar ao servidores, verifique a sua internet.", [
            {
                isPreferred: true,
                text: "Tentar novamente",
                onPress (): void {
                    validateConnection(ifConnectionFunction);
                },
            },
            {
                text: "Cancelar"
            }
        ]);
        return;
    } else {
        ifConnectionFunction();
    }
}

export function errorConnectionMessage (ifConnectionFunction: () => void | null): void {
    Alert.alert("Falha na conexão!", "Houve falha tentando conectar ao servidores, verifique a sua internet.", [
        {
            isPreferred: true,
            text: "Tentar novamente",
            onPress (): void {
                if (ifConnectionFunction) {
                    validateConnection(ifConnectionFunction);
                }
            },
        },
        {
            text: "Cancelar"
        }
    ]);
}