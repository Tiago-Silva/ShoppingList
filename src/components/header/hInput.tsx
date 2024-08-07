import React from 'react';
import {Input} from "../input";
import {inputValue} from "../../store/modules/shoppingList/actions";
import {useAppDispatch, useAppSelector} from "../../store/modules/hooks";

const HInput = () => {
    const dispatch = useAppDispatch();
    const changeValue = useAppSelector((state) => state.cart?.inputValue);

    const handleInputChanges = (value: string) => {
      dispatch(inputValue(value));
    };

    return (
        <Input
            placeholder={'Nome do item'}
            height={4}
            width={44}
            fontSize={12}
            value={changeValue}
            onChangeText={handleInputChanges}
        />
    );
};

export default HInput;
