import React from 'react';
import * as S from './styles';
import {useAppDispatch, useAppSelector} from "../../store/modules/hooks";
import {ShoppingService} from "../../service/shoppingService";
import {RouteProp, useRoute} from "@react-navigation/native";
import {HeaderRouteParams} from "../../types/types";
import {clearInputValue, updateShoppingList} from "../../store/modules/shoppingList/actions";

type HeaderRouteProp = RouteProp<{ params: HeaderRouteParams }, 'params'>;

const AddItems = () => {
    const dispatch = useAppDispatch();
    const inputValue = useAppSelector((state) => state.cart?.inputValue);
    const name = useRoute<HeaderRouteProp>().params?.name || '';

    const handleAddItem = async () => {
        if (!inputValue) {
            return;
        }

        await ShoppingService.addItem(
            name,
            {
                name: inputValue,
                quantity: 1,
                icon: '',
                checked: false
            }
        );
        dispatch(clearInputValue());
        const updatedShoppingList = await ShoppingService.getShoppingList(name);
        dispatch(updateShoppingList(updatedShoppingList));
    }

    return (
        <S.Container>
            {inputValue && (
                <S.LineItem>
                    <S.WrapperIcon onPress={handleAddItem}>
                        <S.Icon name='plus-circle'/>
                    </S.WrapperIcon>
                    <S.Title>{inputValue}</S.Title>
                </S.LineItem>
            )}
        </S.Container>
    );
};

export default AddItems;
