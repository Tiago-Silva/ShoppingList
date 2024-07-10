import React from "react";
import * as S from "./styles";

import { TextInputProps } from 'react-native';
import {useTheme} from "styled-components";

interface Props extends TextInputProps {
    placeholder: string;
}

export const Input = ({
    placeholder,
    ...rest
}: Props) => {
    const theme = useTheme();

    return (
        <S.Container
            placeholder={placeholder}
            placeholderTextColor={theme.colors.text_bar}
            {...rest}
        />
    );
};
