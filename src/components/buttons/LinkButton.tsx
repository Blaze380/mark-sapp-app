import { ReactElement, ReactNode, useEffect, useState } from "react";
import { ColorSchemeName, useColorScheme } from "react-native";
import { Text, TouchableOpacity, View } from "../Themed";
import Colors from "@/constants/Colors";
import Styles from "@/constants/Styles";
import { Href, Link, } from "expo-router";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AppScreenNavigationProp } from "../../../types";

interface Props {
  text: ReactNode;
  href: string;
}

export default function LinkButton (props: Props): ReactElement {
  const colorScheme: ColorSchemeName = useColorScheme();
  const [textColor, setTextColor] = useState<string>("#ffff");
  //It was an Indian told me
  const navigation = useNavigation<AppScreenNavigationProp>();


  useEffect((): void => {
    if (colorScheme === "dark") {
      setTextColor(Colors.dark.buttonText);
    } else {
      setTextColor(Colors.light.buttonText);
    }
  }, [colorScheme]);
  return (
    <TouchableOpacity className="items-center justify-center w-[300] h-11 rounded-full" lightColor={Colors.light.buttonBackground} darkColor={Colors.dark.buttonBackground} onPress={(): void => navigation.navigate(props.href)}>
      <Text lightColor={Colors.light.text} style={Styles.text} darkColor={Colors.dark.text}>{props.text}</Text>
      {/* <Link style={[{color:textColor},Styles.text]} href={props.href}></Link> */}
    </TouchableOpacity>
  )
}