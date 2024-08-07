import styled from "styled-components/native";
import {RFPercentage} from "react-native-responsive-fontsize";
import {Feather} from "@expo/vector-icons";
import {themeType} from "../../global/theme";

type ThemeColors = 'background_header' | 'background_card';

interface ContainerProps {
    $background: ThemeColors;
}

export const Container = styled.View<ContainerProps>`
    display: flex;
    flex-direction: row;
    
    justify-content: space-between;
    padding: ${RFPercentage(3)}px;
    
    width: 100%;
    height: ${RFPercentage(10)}px;

    background-color: ${({ theme, $background }: { theme: themeType; $background: ThemeColors }) => theme.colors[$background]};
`;

export const Title = styled.Text`
    color: ${({ theme }: { theme: themeType }) => theme.colors.shape};
    font-size: ${RFPercentage(3)}px;
    text-align: center;
`;

export const WrapperIcon = styled.View`
    display: flex;
    flex-direction: row;
    
    gap: 20px;
`;

export const Icon = styled(Feather)`
    color: ${({ theme }: { theme: themeType }) => theme.colors.shape};
    font-size: ${RFPercentage(3)}px;
`;

export const WrapperTouchIcon = styled.TouchableOpacity`
    
`;
