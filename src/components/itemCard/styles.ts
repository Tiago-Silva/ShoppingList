import styled from "styled-components/native";
import {RFPercentage} from "react-native-responsive-fontsize";
import {themeType} from "../../global/theme";


export const Container = styled.View`
    flex-direction: row;
    justify-content: space-between;
    
    align-items: center;
`;

export const RightContainer = styled.View`
    flex-direction: row;
`;

export const LeftContainer = styled.View`
    flex-direction: row;
    gap: ${RFPercentage(1)}px;
`;

export const WrapperIcon = styled.TouchableOpacity`

`;

export const Title = styled.Text`
    color: ${({ theme }: {theme: themeType}) => theme.colors.shape};
    font-size: ${RFPercentage(2)}px;
    text-align: center;
`;
