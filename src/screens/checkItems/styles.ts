import styled from "styled-components/native";
import {RFPercentage} from "react-native-responsive-fontsize";
import {themeType} from "../../global/theme";


export const Container = styled.View`
    flex: 1;
    
    justify-content: space-between;
    
    background-color: ${({ theme }: { theme: themeType }) => theme.colors.background};
`;

export const Header = styled.View`
    padding: ${RFPercentage(3)}px ${RFPercentage(2)}px ${RFPercentage(3)}px ${RFPercentage(2)}px;
    
    background-color: ${({ theme }: any) => theme.colors.background_card};
`;

export const Footer = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: flex-end;

    padding: ${RFPercentage(3)}px ${RFPercentage(2)}px ${RFPercentage(3)}px ${RFPercentage(2)}px;
`;
