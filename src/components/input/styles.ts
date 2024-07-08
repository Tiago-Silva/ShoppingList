import {RFPercentage, RFValue} from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import {themeType} from "../../global/theme";

export const Container = styled.TextInput`
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: ${RFPercentage(48)}px;
    height: ${RFPercentage(8)}px;
    padding: 1px 25px;
    
    font-size: ${RFValue(20)}px;
    font-weight: bold;
    background-color: ${({ theme }: { theme: themeType }) => theme.colors.gray_01};
    color: ${({ theme }: { theme: themeType }) => theme.colors.shape};
    
    border-radius: 20px;
`;

