import styled from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";
import {themeType} from "../../global/theme";
import Modal from 'react-native-modal';

export const ModalContainer = styled(Modal)`
    display: flex;
    justify-content: flex-end;
    margin: 0;
`;

export const Content = styled.View`
    height: ${RFPercentage(20)}px;
    width: ${RFPercentage(100)}px;
    background-color: ${({ theme }: {theme: themeType}) => theme.colors.background_card};
    padding: ${RFPercentage(2)}px;

    position: absolute;
    bottom: 0;
`;

export const Title = styled.Text`
    font-size: ${RFPercentage(2.5)}px;
    color: ${({ theme }:{theme: themeType}) => theme.colors.shape};
    font-weight: bold;
`;
