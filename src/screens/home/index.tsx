import * as S from "./styles";
import {useFocusEffect, useNavigation} from "@react-navigation/native";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../../types/types";
import Button from "../../components/button";
import ListCard from "../../components/ListCard";
import {useCallback, useState} from "react";
import {ShoppingList} from "../../components/interface/interface";
import {ShoppingService} from "../../components/service/shoppingService";

type NavigationProp = StackNavigationProp<RootStackParamList>;

export const Home = () => {
    const navigation = useNavigation<NavigationProp>();
    const [listCards, setListCards] = useState<ShoppingList[]>([]);

    const handleNavigation = () => {
        navigation.navigate({name: 'List', params: {} });
    }

    useFocusEffect(
        useCallback(() => {
            const fetchLists = async () => {
                const lists = await ShoppingService.getAll();
                console.log('Listas: ', lists);
                setListCards(lists);
            };

            fetchLists();
        }, [])
    );

    return (
        <S.Container>
            <S.Content>
                {listCards.map((item, index) => (
                    <ListCard key={index} name={item.name} items={item.items} />
                ))}
            </S.Content>

            <S.Footer>
                <Button
                    title={'+ Nova Lista'}
                    width={50}
                    handleOnPress={handleNavigation}
                />
            </S.Footer>
        </S.Container>
    );
}
