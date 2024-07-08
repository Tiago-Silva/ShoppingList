import React from 'react';
import * as S from './styles';
import * as Progress from 'react-native-progress';
import {useTheme} from "styled-components";
import {ShoppingList} from "../interface/interface";

const ListCard = ({
    name,
    items,
}: ShoppingList) => {
    const theme = useTheme();

    const handleShowItems = () => {
        console.log('Adicionar nova lista');
    }

    return (
        <S.Container onPress={handleShowItems}>
            <S.Header>
                <S.Title>{name}</S.Title>
                <S.Icon name={'more-vertical'} />
            </S.Header>
            <S.Footer>
                <Progress.Bar
                    progress={items.length}
                    width={310}
                    color={theme.colors.text_bar}
                />
            </S.Footer>
        </S.Container>
    );
};

export default ListCard;
