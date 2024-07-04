import React from 'react';
import * as S from "./styles";

interface Props {
    title: string;
    width?: number;
    handleNavigation: () => void;
}

const Button = ({
    title,
    width = 100,
    handleNavigation
}: Props) => {
    return (
        <S.Container onPress={handleNavigation} $width={width}>
            <S.Title>{title}</S.Title>
        </S.Container>
    );
};

export default Button;
