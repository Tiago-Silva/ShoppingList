import React from 'react';
import * as S from './styles';
import * as Progress from 'react-native-progress';
import {useTheme} from "styled-components";
import {RouteProp, useNavigation, useRoute} from "@react-navigation/native";
import {HeaderRouteParams, RootStackParamList} from "../../types/types";
import Button from "../../components/button";
import {StackNavigationProp} from "@react-navigation/stack";
import {ItemData, ShoppingList} from "../../interface/interface";
import ItemCard from "../../components/itemCard";
import {ListRenderItemInfo} from "react-native";
import {useSelector} from "react-redux";
import {IState} from "../../store/modules/shoppingList/type";

type NavigationProp = StackNavigationProp<RootStackParamList>;
type HeaderRouteProp = RouteProp<{ params: HeaderRouteParams }, 'params'>;

const CheckItems = () => {
    const theme = useTheme();
    const navigation = useNavigation<NavigationProp>();
    const name = useRoute<HeaderRouteProp>().params?.name || '';
    const listCards = useSelector<IState, ShoppingList[]>((state) => state.cart.shoppingArrayList);
    const currentList = listCards.find((list) => list.name === name);

    const handleNavigationAddItem = () => {
        navigation.navigate({name: 'AddItems', params: {name}});
    }

    const handleRenderItem = ({ item }: ListRenderItemInfo<ItemData>) => {
        return (
            <ItemCard
                name={name}
                item={item}
            />
        )
    }


    return (
        <S.Container>
            <S.Header>
                <Progress.Bar
                    progress={
                        currentList
                            ? currentList.items.filter((item) => item.checked).length / currentList.items.length
                            : 0
                    }
                    width={350}
                    color={theme.colors.text_bar}
                />
                <S.WrapperList
                    data={currentList ? currentList.items : []}
                    keyExtractor={(item: ItemData) => item.name}
                    renderItem={handleRenderItem}
                />
            </S.Header>
            <S.Footer>
                <Button
                    title={'+ ADICIONAR'}
                    width={50}
                    handleOnPress={handleNavigationAddItem}
                />
            </S.Footer>
        </S.Container>
    );
};

export default CheckItems;
