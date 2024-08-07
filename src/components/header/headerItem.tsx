import React from 'react';
import * as S from "./styles";
import {Input} from "../input";
import {inputValue} from "../../store/modules/shoppingList/actions";
import {useAppDispatch, useAppSelector} from "../../store/modules/hooks";

interface Props {
    onNavigation?: () => void;
    background?: string;
}

const HeaderItem = ({
    onNavigation,
    background = 'background_header'
}: Props) => {
    const dispatch = useAppDispatch();
    const changeValue = useAppSelector((state) => state.cart?.inputValue);

    const handleInputChanges = (value: string) => {
      dispatch(inputValue(value));
    };

    return (
        <S.Container $background={background}>
            <S.Icon name="arrow-left" onPress={onNavigation}/>
            <Input
                placeholder={'Nome do item'}
                height={4}
                width={44}
                fontSize={12}
                value={changeValue}
                onChangeText={handleInputChanges}
            />
        </S.Container>
    );
};

export default HeaderItem;
