import { ReactElement } from "react";
import { View } from "../../Themed";

type ChatPageRootProps = {
    children: ReactElement | ReactElement[];
}
export default function ChatPageRoot ({ children }: ChatPageRootProps): ReactElement {
    return (
        <View className="bg-transparenta max-w-xs overflow-hidden rounded-lg p-2 m-2">
            {children}
        </View>
    );
};
