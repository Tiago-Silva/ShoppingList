import React from 'react';
import * as S from './styles';
import * as Progress from 'react-native-progress';
import {useTheme} from "styled-components";

const ListCard = () => {
    const theme = useTheme();

    return (
        <S.Container>
            <S.Header>
                <S.Title>Compras</S.Title>
                <S.Icon name={'more-vertical'} />
            </S.Header>
            <S.Footer>
                <Progress.Bar
                    progress={0.3}
                    width={310}
                    color={theme.colors.text_bar}
                />
            </S.Footer>
        </S.Container>
    );
};

export default ListCard;
