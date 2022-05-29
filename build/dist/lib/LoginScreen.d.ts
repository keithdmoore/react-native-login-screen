import * as React from "react";
import { StyleProp, ViewStyle, TextStyle, ImageStyle } from "react-native";
declare type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;
declare type CustomImageStyleProp = StyleProp<ImageStyle> | Array<StyleProp<ImageStyle>>;
declare type CustomTextStyleProp = StyleProp<TextStyle> | Array<StyleProp<TextStyle>>;
export interface ILoginScreenProps {
    haveAccountText?: string;
    disableDivider?: boolean;
    logoImageSource: any;
    disableSocialButtons?: boolean;
    style?: CustomStyleProp;
    dividerStyle?: CustomStyleProp;
    logoImageStyle?: CustomImageStyleProp;
    textInputContainerStyle?: CustomStyleProp;
    loginButtonStyle?: CustomStyleProp;
    loginTextStyle?: CustomTextStyleProp;
    haveAccountButtonStyle?: CustomStyleProp;
    haveAccountTextStyle?: CustomTextStyleProp;
    onLoginPress: () => void;
    onForgotPasswordPress: () => void;
    onHaveAccountPress: () => void;
    onEmailChange: (email: string) => void;
    onPasswordChange: (password: string) => void;
    onFacebookPress?: () => void;
    onTwitterPress?: () => void;
    onApplePress?: () => void;
    onDiscordPress?: () => void;
    children?: React.ReactNode;
}
declare const LoginScreen: React.FC<ILoginScreenProps>;
export default LoginScreen;
