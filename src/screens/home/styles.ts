import styled from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";
import {themeType} from "../../global/theme";
import {ShoppingList} from "../../interface/interface";
import Animated from "react-native-reanimated";

export const Container = styled.View`
    display: grid;
    grid-template-rows: 1fr auto;
    height: 100%;
    padding: ${RFPercentage(3)}px ${RFPercentage(2)}px ${RFPercentage(3)}px ${RFPercentage(2)}px;
    gap: ${RFPercentage(2)}px;
    background-color: ${({ theme }: { theme: themeType }) => theme.colors.background};
`;

export const Content = styled.View`
    flex: 1;
    gap: ${RFPercentage(2)}px;
`;

export const Footer = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: flex-end;
`;

export const WrapperList = styled(
    Animated.FlatList as unknown as new () => Animated.FlatList<ShoppingList>
).attrs({
    showsVerticalScrollIndicator: false,
    containerStyle: {
        paddingRight: RFPercentage(2),
        paddingLeft: RFPercentage(2),
    },
    contentContainerStyle: {
        paddingBottom: RFPercentage(3),
        gap: RFPercentage(2),
    }
})`
    margin-top: ${RFPercentage(2)}px;
    width: 100%;
`;
