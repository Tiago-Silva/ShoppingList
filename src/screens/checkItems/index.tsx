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
import {MotiView} from "moti";
import {FadeIn, FadeOut} from "react-native-reanimated";

type NavigationProp = StackNavigationProp<RootStackParamList>;
type HeaderRouteProp = RouteProp<{ params: HeaderRouteParams }, 'params'>;

const CheckItems = () => {
    const theme = useTheme();
    const navigation = useNavigation<NavigationProp>();
    const name = useRoute<HeaderRouteProp>().params?.name || '';
    const listCards = useSelector<IState, ShoppingList[]>((state) => state.cart.shoppingArrayList);
    const currentList = listCards.find((list) => list.name === name);
    const currentItems = currentList ? currentList.items.length > 0 ? currentList.items : [] : [];

    const handleNavigationAddItem = () => {
        navigation.navigate({name: 'AddItems', params: {name}});
    }

    const handleRenderItem = ({ item }: ListRenderItemInfo<ItemData>) => {
        return (
            <MotiView
                from={{ opacity: 0, translateX: 100 }}
                animate={{ opacity: 1, translateX: 0 }}
                exit={{ opacity: 0, translateX: -100 }}
                transition={{type: 'spring'}}
            >
                <ItemCard
                    name={name}
                    item={item}
                />
            </MotiView>
        )
    }


    return (
        <S.Container>
            <S.Header>
                <Progress.Bar
                    progress={
                        currentItems.length > 0
                            ? currentItems.filter((item) => item.checked).length / currentItems.length
                            : 0
                    }
                    width={350}
                    color={theme.colors.text_bar}
                />
            </S.Header>
            <S.Content>
                <S.WrapperList
                    data={currentItems.length > 0 ? currentItems : []}
                    keyExtractor={(item: ItemData) => item.name}
                    renderItem={handleRenderItem}
                    entering={FadeIn}
                    exiting={FadeOut}
                />
            </S.Content>
            <S.Footer>
                <Button
                    title={'+ ADICIONAR'}
                    width={50}
                    onPress={handleNavigationAddItem}
                />
            </S.Footer>
        </S.Container>
    );
};

export default CheckItems;
