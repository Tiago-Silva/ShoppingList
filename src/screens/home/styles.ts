import styled from "styled-components/native";
import {RFPercentage, RFValue} from "react-native-responsive-fontsize";


export const Container = styled.View`
    flex: 1;
    padding: ${RFPercentage(3)}px ${RFPercentage(2)}px ${RFPercentage(3)}px ${RFPercentage(2)}px;
    
    justify-content: space-between;
    
    background-color: ${props => props.theme.colors.background};
`;

export const Header = styled.View`
    gap: 20px;
`;

export const Footer = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: flex-end;
`;

export const Title = styled.Text`
    color: ${({ theme }: any) => theme.colors.shape};
    font-size: ${RFPercentage(3)}px;
    text-align: center;
`;
