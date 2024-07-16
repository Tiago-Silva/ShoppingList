import styled from "styled-components/native";
import {RFPercentage} from "react-native-responsive-fontsize";
import {themeType} from "../../global/theme";
import {Feather} from "@expo/vector-icons";

export const Container = styled.View`
    height: 100%;
    padding: ${RFPercentage(3)}px ${RFPercentage(2)}px ${RFPercentage(3)}px ${RFPercentage(2)}px;
    gap: ${RFPercentage(2)}px;
    background-color: ${({ theme }: { theme: themeType }) => theme.colors.background};

`;

export const LineItem = styled.View`
    flex-direction: row;
    gap: ${RFPercentage(2)}px;
    align-items: center;
    justify-content: flex-start;
`;

export const WrapperIcon = styled.TouchableOpacity`

`;

export const Icon = styled(Feather)`
    font-size: ${RFPercentage(3)}px;
    color: ${({ theme }: { theme: themeType }) => theme.colors.text_bar};
`;

export const Title = styled.Text`
    color: ${({ theme }: any) => theme.colors.shape};
    font-size: ${RFPercentage(3)}px;
    text-align: center;
`;
