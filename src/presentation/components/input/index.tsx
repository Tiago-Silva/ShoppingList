import React from "react";
import * as S from "./styles";

import { TextInputProps } from 'react-native';
import {useTheme} from "styled-components";

interface Props extends TextInputProps {
    placeholder: string;
    height?: number;
    width?: number;
    fontSize?: number;
}

export const Input = ({
    placeholder,
    height,
    width,
    fontSize,
    ...rest
}: Props) => {
    const theme = useTheme();

    return (
        <S.Container
            placeholder={placeholder}
            placeholderTextColor={theme.colors.text_bar}
            $height={height}
            $width={width}
            $fontSize={fontSize}
            {...rest}
            testID={'input'}
        />
    );
};
