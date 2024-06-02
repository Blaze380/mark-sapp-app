import { ReactElement } from "react";
import { Text, View } from "../../Themed";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface ChatPageDocumentMessageProps {
    name: string;
    type: string;
    size: string;

}
export default function ChatPageDocumentMessage (props: ChatPageDocumentMessageProps): ReactElement {
    return (
        <View className="">
            <View>
                <MaterialCommunityIcons name="file-document" />
                <Text>{props.name}</Text>
            </View>
        </View>
    );
};
