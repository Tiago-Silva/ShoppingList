import styled from "styled-components/native";
import {RFPercentage} from "react-native-responsive-fontsize";
import {themeType} from "../../global/theme";

interface ContainerProps {
    $isPlayng: boolean;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
    flex-direction: row;
    justify-content: space-between;
    
    align-items: center;
    padding: 0 ${RFPercentage(2)}px;
    
    background-color: 
            ${({ $isPlayng, theme }: { $isPlayng: boolean, theme: themeType })=> 
                    $isPlayng 
                    ? 
                    theme.colors.background 
                    : 
                    theme.colors.background_card
            };
`;

export const Content = styled.View`
    flex-direction: row;
    gap: ${RFPercentage(1)}px;
    align-items: center;
`;

export const WrapperIcon = styled.TouchableOpacity`
    bottom: -${RFPercentage(1)}px;
`;

export const Title = styled.Text<ContainerProps>`
    color: ${({ theme, $isPlayng }: {theme: themeType, $isPlayng: boolean}) => $isPlayng ? theme.colors.text_dark : theme.colors.shape};
    font-size: ${RFPercentage(2)}px;
    text-align: center;
`;
