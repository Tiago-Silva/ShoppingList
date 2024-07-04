import styled from "styled-components/native";
import {RFPercentage, RFValue} from "react-native-responsive-fontsize";

interface ButtonProps {
    $width?: number;
}

export const Container = styled.TouchableOpacity<ButtonProps>`
    width: ${props => props.$width}%;
    height: ${RFPercentage(5)}px;
    border: 1px solid ${props => props.theme.colors.gray_01};
    background-color: ${props => props.theme.colors.gray_01};
    border-radius: ${RFValue(30)}px;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    color: ${props => props.theme.colors.text};
    font-size: ${RFValue(16)}px;
    font-weight: bold;
`;
