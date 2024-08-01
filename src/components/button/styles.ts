import styled from "styled-components/native";
import {RFPercentage, RFValue} from "react-native-responsive-fontsize";
import {themeType} from "../../global/theme";

interface ButtonProps {
    $width?: number;
}

export const Container = styled.TouchableOpacity<ButtonProps>`
    width: ${(props: ButtonProps) => (props.$width ? `${props.$width}%` : 'auto')};
    height: ${RFPercentage(5)}px;
    border: 1px solid ${({ theme }: { theme: themeType }) => theme.colors.gray_01};
    background-color: ${({ theme }: { theme: themeType }) => theme.colors.gray_01};
    border-radius: ${RFValue(30)}px;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    color: ${({ theme }: { theme: themeType }) => theme.colors.text};
    font-size: ${RFValue(16)}px;
    font-weight: bold;
`;
