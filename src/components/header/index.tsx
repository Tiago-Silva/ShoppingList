import React from 'react';
import * as S from "./styles";
import RabbitAnimation from "../animation/RabbitAnimation";

const Header = () => {
    return (
        <S.Container>
            <S.Title>Minhas listas</S.Title>

            <S.WrapperIcon>
                <RabbitAnimation />
                <S.Icon name="more-vertical" />
            </S.WrapperIcon>
        </S.Container>
    );
};

export default Header;
