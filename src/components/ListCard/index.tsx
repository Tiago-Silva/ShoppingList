import React from 'react';
import * as S from './styles';
import * as Progress from 'react-native-progress';
import {useTheme} from "styled-components";
import {ShoppingList} from "../../interface/interface";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../../types/types";
import {useNavigation} from "@react-navigation/native";
import {ShoppingService} from "../../service/shoppingService";

type NavigationProp = StackNavigationProp<RootStackParamList>;

const ListCard = ({
    name,
    items,
}: ShoppingList) => {
    const theme = useTheme();
    const navigation = useNavigation<NavigationProp>();

    const handleShowItems = () => {
        navigation.navigate({name: 'CheckItems', params: {name, items} });
    }

    const handleUpdateCard = () => {
        ShoppingService.delete({name, items}).then(() => {});
    }

    return (
        <S.Container onPress={handleShowItems}>
            <S.Header>
                <S.Title>{name}</S.Title>
                <S.Wrapper onPress={handleUpdateCard}>
                    <S.Icon name={'more-vertical'} />
                </S.Wrapper>
            </S.Header>
            <S.Footer>
                <Progress.Bar
                    progress={items.length > 0 ? items.filter((item) => item.checked).length / items.length : 0}
                    width={310}
                    color={theme.colors.text_bar}
                />
            </S.Footer>
        </S.Container>
    );
};

export default ListCard;
