import styled from "styled-components/native";
import {RFPercentage} from "react-native-responsive-fontsize";
import {themeType} from "../../global/theme";
import {FlatList} from "react-native";
import {Item} from "../../interface/interface";


export const Container = styled.View`
    flex: 1;
    
    justify-content: space-between;
    
    background-color: ${({ theme }: { theme: themeType }) => theme.colors.background};
`;

export const Header = styled.View`
    padding: ${RFPercentage(3)}px ${RFPercentage(2)}px ${RFPercentage(3)}px ${RFPercentage(2)}px;
    
    background-color: ${({ theme }: any) => theme.colors.background_card};
`;

export const WrapperList = styled(
    FlatList as new () => FlatList<Item>
).attrs({
    showsVerticalScrollIndicator: false,
    containerStyle: {
        paddingRight: RFPercentage(2),
        paddingLeft: RFPercentage(2)
    },
    contentContainerStyle: {
        gap: RFPercentage(1)
    }
})`   
    margin-top: ${RFPercentage(2)}px;
    width: 100%;
`;

export const Footer = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: flex-end;

    padding: ${RFPercentage(3)}px ${RFPercentage(2)}px ${RFPercentage(3)}px ${RFPercentage(2)}px;
`;
