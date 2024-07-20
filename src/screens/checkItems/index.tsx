import React from 'react';
import * as S from './styles';
import * as Progress from 'react-native-progress';
import {useTheme} from "styled-components";
import {RouteProp, useNavigation, useRoute} from "@react-navigation/native";
import {HeaderRouteParams, RootStackParamList} from "../../types/types";
import Button from "../../components/button";
import {StackNavigationProp} from "@react-navigation/stack";
import {ItemData} from "../../interface/interface";
import ItemCard from "../../components/itemCard";
import {ListRenderItemInfo} from "react-native";

type NavigationProp = StackNavigationProp<RootStackParamList>;
type HeaderRouteProp = RouteProp<{ params: HeaderRouteParams }, 'params'>;

const listItems: ItemData[] = [
    {
        name: 'Arroz',
        quantity: 1,
        icon: '🍚'
    },
    {
        name: 'Feijão',
        quantity: 1,
        icon: '🍛'
    },
    {
        name: 'Macarrão',
        quantity: 1,
        icon: '🍝'
    },
    {
        name: 'Carne',
        quantity: 1,
        icon: '🍖'
    },
    {
        name: 'Frango',
        quantity: 1,
        icon: '🍗'
    },
    {
        name: 'Peixe',
        quantity: 1,
        icon: '🐟'
    },
    {
        name: 'Ovos',
        quantity: 1,
        icon: '🥚'
    },
    {
        name: 'Leite',
        quantity: 1,
        icon: '🥛'
    },
    {
        name: 'Queijo',
        quantity: 1,
        icon: '🧀'
    },
    {
        name: 'Presunto',
        quantity: 1,
        icon: '🍖'
    },
    {
        name: 'Pão',
        quantity: 1,
        icon: '🍞'
    },
    {
        name: 'Manteiga',
        quantity: 1,
        icon: '🧈'
    },
    {
        name: 'Açúcar',
        quantity: 1,
        icon: '🍬'
    },
    {
        name: 'Café',
        quantity: 1,
        icon: '☕'
    },
    {
        name: 'Suco',
        quantity: 1,
        icon: '🥤'
    },
    {
        name: 'Refrigerante',
        quantity: 1,
        icon: '🥤'
    },
    {
        name: 'Cerveja',
        quantity: 1,
        icon: '🍺'
    },
    {
        name: 'Vinho',
        quantity: 1,
        icon: '🍷'
    },
    {
        name: 'Água',
        quantity: 1,
        icon: '💧'
    },
    {
        name: 'Sabão',
        quantity: 1,
        icon: '🧼'
    }
];

const CheckItems = () => {
    const theme = useTheme();
    const navigation = useNavigation<NavigationProp>();
    const { items = [], name = '' } = useRoute<HeaderRouteProp>().params || {};

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
                    progress={items.filter((item) => item.checked).length / items.length}
                    width={350}
                    color={theme.colors.text_bar}
                />
                <S.WrapperList
                    data={items.length > 0 ? items : []}
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
