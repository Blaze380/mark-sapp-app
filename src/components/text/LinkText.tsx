import { ReactElement } from "react";
import { Text, View } from "../Themed";
import { Href, Link } from "expo-router";
import Styles from "@/constants/Styles";
import Colors from "@/constants/Colors";

export default function LinkText ({ text, linkText,href }: {href:Href<string>, text: string, linkText: string }): ReactElement{
    return (
        <View style={{display:"flex",flexDirection:"row",gap:10}}>
            <Text lightColor={Colors.light.text} darkColor={Colors.dark.text} style={Styles.smallText}>{text}</Text>
            <Link href={href} style={[Styles.smallText,Styles.link]}>{ linkText}</Link>
        </View>
    )
}