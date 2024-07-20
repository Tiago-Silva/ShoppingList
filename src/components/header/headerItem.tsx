import React from 'react';
import * as S from "./styles";
import {Input} from "../input";
import {inputValue} from "../../store/modules/shoppingList/actions";
import {useAppDispatch, useAppSelector} from "../../store/modules/hooks";

interface Props {
    handleNavigation?: () => void;
    background?: string;
}

const HeaderItem = ({
    handleNavigation,
    background = 'background_header'
}: Props) => {
    const dispatch = useAppDispatch();
    const changeValue = useAppSelector((state) => state.cart?.inputValue);

    const handleInputChanges = (value: string) => {
      dispatch(inputValue(value));
    };

    return (
        <S.Container $background={background}>
            <S.Icon name="arrow-left" onPress={handleNavigation}/>
            <Input
                placeholder={'Nome do shoppingList'}
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
