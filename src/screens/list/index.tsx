import * as S from "./styles";
import React, {useState} from "react";
import {Input} from "../../components/input";
import Button from "../../components/button";
import {ListRenderItemInfo} from "react-native";

export interface Sugestion {
    id: number;
    title: string;
}

const suggestions: Sugestion[] = [
    { id: 1, title: 'Compras' },
    { id: 2, title: 'Mantimentos' },
    { id: 3, title: 'Fim de semana' },
    { id: 4, title: 'Sexta-feira' },
    { id: 5, title: 'Viagem' },
    { id: 6, title: 'Supermercado' },
    { id: 7, title: 'Casa' },
    { id: 8, title: 'Farmácia' },
];

export const List = () => {
    const [inputValue, setInputValue] = useState('')

    const handleSelectSugestion = (value: string) => {
        setInputValue(value);
    };

    const renderItem = ({ item }: ListRenderItemInfo<Sugestion>) => {
        return (
            <S.Button onPress={() => handleSelectSugestion(item.title)}>
                <S.TitleButon>{item.title}</S.TitleButon>
            </S.Button>
        )
    }

    return (
        <S.Container>
            <S.Header>
                <S.Icon name={'list-check'} />
                <Input
                    placeholder={'Nova Lista'}
                    value={inputValue}
                    onChangeText={setInputValue}
                />
                <S.WrapperList>
                    <S.TitleButon>Sugestões</S.TitleButon>
                    <S.WrapperSugestions
                        data={suggestions}
                        keyExtractor={(item: Sugestion) => item.id}
                        renderItem={renderItem}
                    />
                </S.WrapperList>
            </S.Header>

            <S.Footer>
                <Button title={'CRIAR'} handleOnPress={() => {}} />
            </S.Footer>
        </S.Container>
    );
}
