import React from 'react';
import * as S from "./styles";

interface Props {
    onNavigation?: () => void;
}

const HLeft = ({ onNavigation }: Props) => {
    return (
        <S.WrapperTouchIcon onPress={onNavigation} testID="left-icon">
            <S.Icon name="arrow-left" />
        </S.WrapperTouchIcon>
    );
};

export default HLeft;
