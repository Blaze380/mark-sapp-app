import { ReactElement, ReactNode } from "react";
import { Text, View } from "../Themed";

type QuickConfigurationProps = {
    title: ReactNode;
}
export default function QuickConfiguration ({ title }: QuickConfigurationProps): ReactElement {
    return (
        <View className='flex items-center justify-start h-9  flex-row space-x-3 bg-transparent' >
            <Text className='text-title font-bold'>{title}</Text>
        </View>
    );
}