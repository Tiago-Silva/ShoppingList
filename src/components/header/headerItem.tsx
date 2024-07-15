import React from 'react';
import * as S from "./styles";
import {Input} from "../input";

interface Props {
    handleNavigation?: () => void;
    background?: string;
}

const HeaderItem = ({
    handleNavigation,
    background = 'background_header'
}: Props) => {

    return (
        <S.Container $background={background}>
            <S.Icon name="arrow-left" onPress={handleNavigation}/>
            <Input
                placeholder={'Nome do item'}
                height={4}
                width={44}
                fontSize={12}
            />
        </S.Container>
    );
};

export default HeaderItem;
