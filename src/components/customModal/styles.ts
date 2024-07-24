import styled from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";
import {themeType} from "../../global/theme";
import Modal from 'react-native-modal';
import {Feather} from "@expo/vector-icons";

interface IconProps {
    $color?: string;
}

interface TitleProps extends IconProps {
    $size: number;
}

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
    gap: ${RFPercentage(2)}px;

    position: absolute;
    bottom: 0;
`;

export const Title = styled.Text<TitleProps>`
    font-size: ${({ $size }: TitleProps) => RFPercentage($size)}px;
    color: ${({ theme, $color }: { theme: themeType, $color?: keyof themeType['colors'] }) => theme.colors[$color ? $color as keyof themeType['colors'] : 'shape']};
    font-weight: bold;
`;

export const Line = styled.View`
    flex-direction: row;
    align-items: center;
    gap: ${RFPercentage(2)}px;
`;

export const Icon = styled(Feather)<IconProps>`
    font-size: ${RFPercentage(2.5)}px;
    color: ${({ theme, $color }: { theme: themeType, $color?: keyof themeType['colors'] }) => theme.colors[$color ? $color as keyof themeType['colors'] : 'shape']};
`;
