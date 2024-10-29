import React from 'react';
import * as S from "./styles";

interface Props {
    name: string;
}

const HTitle = ({ name }: Props) => {
    return <S.Title>{name}</S.Title>;
};

export default HTitle;
