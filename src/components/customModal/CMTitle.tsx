import React from 'react';
import * as S from "./styles";

interface Props {
    title: string;
    size?: number;
    color?: string;
}

const CmTitle = ({
    title,
    size,
    color
}: Props) => {
    return <S.Title $size={size} $color={color}>{title}</S.Title>;
};

export default CmTitle;
