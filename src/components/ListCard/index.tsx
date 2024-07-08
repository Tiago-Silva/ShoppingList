import React from 'react';
import * as S from './styles';
import * as Progress from 'react-native-progress';
import {useTheme} from "styled-components";

export interface PropsListCard {
    title?: string;
    items?: number;
}

const ListCard = ({
    title = 'Compras',
    items = 0.3,
}: PropsListCard) => {
    const theme = useTheme();

    return (
        <S.Container>
            <S.Header>
                <S.Title>{title}</S.Title>
                <S.Icon name={'more-vertical'} />
            </S.Header>
            <S.Footer>
                <Progress.Bar
                    progress={items}
                    width={310}
                    color={theme.colors.text_bar}
                />
            </S.Footer>
        </S.Container>
    );
};

export default ListCard;
