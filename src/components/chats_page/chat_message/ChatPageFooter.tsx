import { ReactElement } from "react";
import { Text, View } from "../../Themed";
type ChatPageFooterProps = {
    dateSent: string;
}
export default function ChatPageFooter (props: ChatPageFooterProps): ReactElement {
    return (
        <View className={`flex  items-end bg-transparent`}>
            <Text>{props.dateSent}</Text>
        </View>
    );
};
