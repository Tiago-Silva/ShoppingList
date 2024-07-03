import styled from "styled-components/native";
import {RFPercentage, RFValue} from "react-native-responsive-fontsize";


export const Container = styled.View`
    flex: 1;
    background-color: ${props => props.theme.colors.background};
    position: relative;

    padding: ${RFPercentage(3)}px ${RFPercentage(2)}px ${RFPercentage(3)}px ${RFPercentage(2)}px;
`;

export const WrapperButton = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 100%;
    
    position: absolute;
    bottom: 20px;
    //padding-right: ${RFValue(7)}px;
`;
