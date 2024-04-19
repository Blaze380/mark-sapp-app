/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import {
  Image as DefaultImage,
  Text as DefaultText,
  View as DefaultView,
  ColorSchemeName,
  Platform,
  TouchableOpacityProps,
  TouchableOpacity as DefaultTouchableOpacity,
  TextInput as DefaultTextInput,
  TextInputProps,
  Modal as DefaultModal,
  ModalProps,
  ActivityIndicator as DefaultActivityIndicator,
  ActivityIndicatorProps,
} from 'react-native';
import Colors from '@/constants/Colors';
import { useColorScheme } from './useColorScheme';
import { ReactElement, useEffect, useState } from "react";
import { StatusBar  as DefaultStatusBar} from 'expo-status-bar';
import Images from '@/constants/Images';
import { TextInputMask as DefaultTextInputMask} from 'react-native-masked-text';


export type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};
export function useThemeColor(props: { light?: string; dark?: string },colorName: keyof typeof Colors.light & keyof typeof Colors.dark) :string{
  const theme: 'light' | 'dark' = useColorScheme() ?? 'light';
  const colorFromProps:string | undefined = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}


export type TextProps = ThemeProps & DefaultText['props'];
export type ViewProps = ThemeProps & DefaultView['props'];
export function Text(props: TextProps):ReactElement {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color:string = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}


export function View (props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor:string = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}


export  function StatusBar (): ReactElement {
    const colorScheme: ColorSchemeName = useColorScheme();
    const [statusBgColor, setStatusBgColor] = useState<string>("");
  useEffect((): void => {
    if (colorScheme === "dark") {
      setStatusBgColor(Colors.dark.statusBarColor);
    } else {
      setStatusBgColor(Colors.light.statusBarColor);
    }
  }, [colorScheme]);
    return (
        <DefaultStatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} backgroundColor={statusBgColor}/>
    );
}

export type ImageProps =  DefaultImage['props'];
export function ImageLogo (props: ImageProps): ReactElement{
  const colorScheme: ColorSchemeName = useColorScheme();
  const [appLogo, setAppLogo] = useState();
    useEffect((): void => {
      if (colorScheme === "dark") {
        setAppLogo(Images.logos.logoDark);
      } else {
        setAppLogo(Images.logos.logo);
    }
  }, [colorScheme]);
  return (
    <DefaultImage {...props} source={appLogo} />
  );
}
export type CustomImageProps = ImageProps & {
  lightImage: any;
  darkImage: any;
}
export function CustomImage (props: CustomImageProps): ReactElement{
  const { lightImage, darkImage, ...otherProps } = props;
  const colorScheme: ColorSchemeName = useColorScheme();
  const [customImage, setCustomImage] = useState();
    useEffect((): void => {
      if (colorScheme === "dark") {
        setCustomImage(darkImage);
      } else {
        setCustomImage(lightImage);
    }
  }, [colorScheme]);
  return (
    <DefaultImage {...otherProps} source={customImage} />
  );
}
export type CustomActivityIndicatorPros = ThemeProps & ActivityIndicatorProps;
export function ActivityIndicator (props:CustomActivityIndicatorPros): ReactElement{
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color:string = useThemeColor({ light: lightColor, dark: darkColor }, 'color');
  return (
    <DefaultActivityIndicator size="large" color={color} {...otherProps} />
  )
}


export type TouchableProps = ThemeProps & TouchableOpacityProps;
export function TouchableOpacity (props: TouchableProps) :ReactElement{
    const { style, lightColor, darkColor, ...otherProps } = props;
    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');
    return <DefaultTouchableOpacity style={[{ backgroundColor }, style]} {...otherProps} />;
  }

  export type TextInputPropsD = ThemeProps & TextInputProps;
  export function TextInput (props:TextInputPropsD): ReactElement{
    const { style, lightColor, darkColor, ...otherProps } = props;
    const text:string = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return (
    <DefaultTextInput placeholderTextColor={text} style={[{color:text},style]} {...otherProps}/>
  )
}
  export function PhoneNumberInput (props:TextInputPropsD): ReactElement{
    const { style, lightColor, darkColor, ...otherProps } = props;
    const text:string = useThemeColor({ light: lightColor, dark: darkColor }, 'text');
    return (
      <DefaultTextInputMask type='cel-phone' options={{maskType:'INTERNATIONAL',}} placeholderTextColor={text} style={[{color:text,borderBottomColor:text},style]} {...otherProps}/>
    )
  }
  export function OtpCodeInput (props:TextInputPropsD): ReactElement{
    const { style, lightColor, darkColor, ...otherProps } = props;
    const text:string = useThemeColor({ light: lightColor, dark: darkColor }, 'text');
    return (
      <DefaultTextInputMask type='only-numbers' options={{separator:"-",format:"/",delimiter:"__"}}  placeholderTextColor={text} style={[{color:text,borderBottomColor:text},style]} {...otherProps}/>
    )
  }

  export type ModalCProps = ThemeProps & ModalProps;
  export function Modal(props:ModalCProps):ReactElement{
    const { style, lightColor, darkColor, ...otherProps } = props;
    const background:string = useThemeColor({ light: lightColor, dark: darkColor }, 'background');
    return (
      <DefaultModal style={[style,{backgroundColor:background}]} {...otherProps} />
    )
   }