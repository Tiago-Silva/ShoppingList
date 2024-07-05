import styled from "styled-components/native";
import {RFPercentage, RFValue} from "react-native-responsive-fontsize";
import { FontAwesome6 } from '@expo/vector-icons';
import {FlatList} from "react-native";
import {Sugestion} from "./index";

export const Container = styled.View`
    flex: 1;
    
    justify-content: space-between;

    padding: ${RFPercentage(3)}px ${RFPercentage(2)}px ${RFPercentage(3)}px ${RFPercentage(2)}px;
    
    background-color: ${props => props.theme.colors.background};
`;

export const Title = styled.Text`
    color: ${({ theme }: any) => theme.colors.shape};
    font-size: ${RFPercentage(3)}px;
    text-align: center;
`;

export const Header = styled.View`
    align-items: center;
    gap: 20px;
`;

export const Footer = styled.View`
    width: 100%;
`;

export const Icon = styled(FontAwesome6)`
    font-size: ${RFPercentage(10)}px;
    color: ${props => props.theme.colors.success};
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
    containerStyle: {
        paddingRight: RFPercentage(2),
        paddingLeft: RFPercentage(2)
    },
    contentContainerStyle: {
        gap: RFPercentage(1)
    }
})`
  //margin-top: ${RFPercentage(2)}px;
  width: 100%;
`;

export const Button = styled.TouchableOpacity`
    height: ${RFPercentage(4)}px;
    border: 1px solid ${props => props.theme.colors.gray_01};
    background-color: ${props => props.theme.colors.gray_01};
    border-radius: ${RFValue(30)}px;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    
    padding: 0 ${RFPercentage(2)}px 0 ${RFPercentage(2)}px;
`;

export const TitleButon = styled.Text`
    color: ${props => props.theme.colors.text_bar};
    font-size: ${RFValue(12)}px;
    font-weight: bold;
`;
