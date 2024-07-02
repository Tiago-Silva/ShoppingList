import React from 'react';
import * as S from "./styles";

interface Props {
    title: string;
    handleNavigation: () => void;
}

const Button = ({
    title,
    handleNavigation
}: Props) => {
    return (
        <S.Container onPress={handleNavigation}>
            <S.Title>{title}</S.Title>
        </S.Container>
    );
};

export default Button;
