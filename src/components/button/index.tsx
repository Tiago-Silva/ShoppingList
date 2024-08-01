import React from 'react';
import * as S from "./styles";

interface Props {
    title: string;
    width?: number;
    handleOnPress: () => void;
}

const Button = ({
    title,
    width = 100,
    handleOnPress
}: Props) => {
    return (
        <S.Container onPress={handleOnPress} $width={width} testID={'button-container'}>
            <S.Title>{title}</S.Title>
        </S.Container>
    );
};

export default Button;
