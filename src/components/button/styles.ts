import styled from "styled-components/native";
import {RFValue} from "react-native-responsive-fontsize";


export const Container = styled.TouchableOpacity`
    width: 50%;
    height: 60px;
    border: 1px solid ${props => props.theme.colors.gray_01};
    background-color: ${props => props.theme.colors.gray_01};
    border-radius: ${RFValue(30)}px;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    color: ${props => props.theme.colors.text};
    font-size: 20px;
    font-weight: bold;
`;
