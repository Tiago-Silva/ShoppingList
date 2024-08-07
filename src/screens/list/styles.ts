import styled from "styled-components/native";
import {RFPercentage, RFValue} from "react-native-responsive-fontsize";
import {FlatList} from "react-native";
import {themeType} from "../../global/theme";
import {Sugestion} from "../../interface/interface";

export const Container = styled.View`
    flex: 1;
    
    justify-content: space-between;

    padding: ${RFPercentage(3)}px ${RFPercentage(2)}px ${RFPercentage(3)}px ${RFPercentage(2)}px;
    
    background-color: ${({ theme }: { theme: themeType }) => theme.colors.background};
`;

export const Title = styled.Text`
    color: ${({ theme }: { theme: themeType }) => theme.colors.primary};
    font-size: ${RFValue(12)}px;
    font-weight: bold;
`;

export const Header = styled.View`
    align-items: center;
    gap: 20px;
`;

export const Footer = styled.View`
    width: 100%;
`;

export const WrapperList = styled.View`
    justify-content: flex-start;
    width: 100%;
    gap: ${RFPercentage(1.5)}px;
`;

export const WrapperSugestions = styled(
    FlatList as new () => FlatList<Sugestion>
).attrs({
    horizontal: true,
    showsVerticalScrollIndicator: false,
    showsHorizontalScrollIndicator: false,
    containerStyle: {
        paddingRight: RFPercentage(2),
        paddingLeft: RFPercentage(2)
    },
    contentContainerStyle: {
        gap: RFPercentage(1)
    }
})`
  width: 100%;
`;

export const Button = styled.TouchableOpacity`
    height: ${RFPercentage(4)}px;
    border: 1px solid ${({ theme }: { theme: themeType }) => theme.colors.gray_01};
    background-color: ${({ theme }: { theme: themeType }) => theme.colors.gray_01};
    border-radius: ${RFValue(30)}px;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    
    padding: 0 ${RFPercentage(2)}px 0 ${RFPercentage(2)}px;
`;

export const TitleButon = styled.Text`
    color: ${({ theme }: { theme: themeType }) => theme.colors.text_bar};
    font-size: ${RFValue(12)}px;
    font-weight: bold;
`;
