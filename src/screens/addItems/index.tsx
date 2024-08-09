import React from 'react';
import * as S from './styles';
import {useAppDispatch} from "../../store/modules/hooks";
import {ShoppingService} from "../../service/shoppingService";
import {RouteProp, useRoute} from "@react-navigation/native";
import {HeaderRouteParams} from "../../types/types";
import {StorageService} from "../../service/storageService";

type HeaderRouteProp = RouteProp<{ params: HeaderRouteParams }, 'params'>;

const storageService = new StorageService();

const AddItems = () => {
    const shoppingService = new ShoppingService(storageService, useAppDispatch());

    const inputValue = shoppingService.getInputValue();
    const name = useRoute<HeaderRouteProp>().params?.name || '';

    const handleAddItem = async () => {
        if (!inputValue) {
            return;
        }

        await shoppingService.addItem(
            name,
            {
                name: inputValue,
                quantity: 1,
                icon: '',
                checked: false
            }
        );
        shoppingService.clearInputValue();
        const updatedShoppingList = await shoppingService.getShoppingList(name);
        shoppingService.updateListInReducer(updatedShoppingList);
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
