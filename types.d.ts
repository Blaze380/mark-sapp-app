import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type AppStackNavigatorParamList = {
    Welcome: undefined;
    InsertPhoneNumber: undefined;
    VerifyOtpCode: undefined;

}
export type AppScreenNavigationProp = NativeStackScreenProps<AppStackNavigatorParamList, Welcome, InsertPhoneNumber, VerifyOtpCode>


