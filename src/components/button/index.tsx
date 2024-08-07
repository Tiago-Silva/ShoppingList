import React from 'react';
import * as S from "./styles";

interface Props {
    title: string;
    width?: number;
    onPress: () => void;
}

const Button = ({
    title,
    width = 100,
    onPress
}: Props) => {
    return (
        <S.Container onPress={onPress} $width={width} testID={'button-container'}>
            <S.Title>{title}</S.Title>
        </S.Container>
    );
};

export default Button;
