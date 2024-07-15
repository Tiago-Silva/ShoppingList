import {RFPercentage, RFValue} from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import {themeType} from "../../global/theme";

interface InputProps {
    $height?: number;
    $width?: number;
    $fontSize?: number;
}

export const Container = styled.TextInput<InputProps>`
    display: flex;
    justify-content: center;
    align-items: center;

    width: ${({ $width }: InputProps) => $width ? `${RFPercentage($width)}px` : `${RFPercentage(48)}px`};
    height: ${({ $height }: InputProps) => $height ? `${RFPercentage($height)}px` : `${RFPercentage(8)}px`};
    padding: 1px 25px;
    
    font-size: ${({ $fontSize }: InputProps) => $fontSize ? `${RFValue($fontSize)}px` : `${RFValue(20)}px`};
    font-weight: bold;
    background-color: ${({ theme }: { theme: themeType }) => theme.colors.gray_01};
    color: ${({ theme }: { theme: themeType }) => theme.colors.shape};
    
    border-radius: 20px;
`;

