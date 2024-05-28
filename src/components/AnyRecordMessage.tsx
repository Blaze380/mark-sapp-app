import { ReactElement, ReactNode } from "react";
import { ImageLogo, Text, View } from "./Themed";

export default function AnyRecordMessage ({ text }: { text: string }): ReactElement {
    return (
        <View className="flex justify-center items-center w-full h-full">
            <ImageLogo className="w-96 h-96" />
            <Text className="text-2xl font-bold">{text}</Text>
        </View>
    );
}