import * as S from "./styles";
import React, {useState} from "react";
import {Input} from "../../components/input";
import Button from "../../components/button";
import {ListRenderItemInfo} from "react-native";
import {ShoppingList, Sugestion} from "../../interface/interface";
import {ShoppingService} from "../../service/shoppingService";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../../types/types";
import {useNavigation} from "@react-navigation/native";
import IconAnimation from "../../components/animation/IconAnimation";
import {useAppDispatch} from "../../store/modules/hooks";
import {StorageService} from "../../service/storageService";

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

type NavigationProp = StackNavigationProp<RootStackParamList>;
const storageService = new StorageService();

export const List = () => {
    const shoppingService = new ShoppingService(storageService, useAppDispatch());
    const [inputValue, setInputValue] = useState('')
    const navigation = useNavigation<NavigationProp>();

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

    const handleCreateList = async () => {
        const AddList: ShoppingList = {
            name: inputValue,
            items: []
        }
        await shoppingService.save(AddList);
        shoppingService.addListInReducer(AddList);
        navigation.navigate({name: 'Home', params: {} });
    }

    return (
        <S.Container>
            <S.Header>
                <IconAnimation
                    animationKey={'checkList'}
                    width={200}
                    height={100}
                    marginBottom={20}
                />
                <Input
                    placeholder={'Nova Lista'}
                    value={inputValue}
                    onChangeText={setInputValue}
                />
                <S.WrapperList>
                    <S.Title>Sugestões</S.Title>
                    <S.WrapperSugestions
                        data={suggestions}
                        keyExtractor={(item: Sugestion) => item.id}
                        renderItem={renderItem}
                    />
                </S.WrapperList>
            </S.Header>

            <S.Footer>
                <Button title={'CRIAR'} onPress={handleCreateList} />
            </S.Footer>
        </S.Container>
    );
}
