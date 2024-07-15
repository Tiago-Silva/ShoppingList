import styled from "styled-components/native";
import {RFPercentage} from "react-native-responsive-fontsize";


export const Container = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const WrapperIcon = styled.TouchableOpacity`

`;

export const Title = styled.Text`
    color: ${({ theme }: any) => theme.colors.shape};
    font-size: ${RFPercentage(2)}px;
    text-align: center;
`;
