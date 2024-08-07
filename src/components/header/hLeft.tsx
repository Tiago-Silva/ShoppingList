import React from 'react';
import * as S from "./styles";

interface Props {
    onNavigation?: () => void;
}

const HLeft = ({ onNavigation }: Props) => {
    return <S.Icon name="arrow-left" onPress={onNavigation} />;
};

export default HLeft;
