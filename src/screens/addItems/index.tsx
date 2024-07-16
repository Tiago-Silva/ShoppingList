import React from 'react';
import * as S from './styles';
import {useAppSelector} from "../../store/modules/hooks";
import {ShoppingService} from "../../service/shoppingService";
import {RouteProp, useRoute} from "@react-navigation/native";
import {HeaderRouteParams} from "../../types/types";

type HeaderRouteProp = RouteProp<{ params: HeaderRouteParams }, 'params'>;

const AddItems = () => {
    const inputValue = useAppSelector((state) => state.cart?.inputValue);
    const name = useRoute<HeaderRouteProp>().params?.name || '';

    const handleAddItem = async () => {
        if (!inputValue) {
            return;
        }

       await ShoppingService.update(name, {name: inputValue, quantity: 1});
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
