import React from 'react';
import * as S from './styles';
import {useAppSelector} from "../../store/modules/hooks";

const AddItems = () => {
    const inputValue = useAppSelector((state) => state.cart?.inputValue);

    return (
        <S.Container>
            <S.Title>{inputValue}</S.Title>
        </S.Container>
    );
};

export default AddItems;
