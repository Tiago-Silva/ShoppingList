import styled from "styled-components/native";
import {RFPercentage} from "react-native-responsive-fontsize";
import {Feather} from "@expo/vector-icons";
import {themeType} from "../../global/theme";


export const Container = styled.TouchableOpacity`
    height: ${RFPercentage(14)}px;
    padding: ${RFPercentage(3)}px ${RFPercentage(2)}px ${RFPercentage(3)}px ${RFPercentage(2)}px;
    
    background-color: ${({ theme }: { theme: themeType }) => theme.colors.background_card};
    border-radius: 10px;
    gap: 15px
`;

export const Wrapper = styled.TouchableOpacity`

`;

export const Header = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const Title = styled.Text`
    color: ${({ theme }: { theme: themeType }) => theme.colors.shape};
    font-size: ${RFPercentage(3)}px;
    text-align: center;
`;

export const Icon = styled(Feather)`
    color: ${({ theme }: { theme: themeType }) => theme.colors.text_bar};
    font-size: ${RFPercentage(2.5)}px;
`;

export const Footer = styled.View`
    width: 100%;
`;
