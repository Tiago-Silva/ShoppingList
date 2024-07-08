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

// const listCards: PropsListCard[] = [
//     { title: 'Compras', items: 0.7 },
//     { title: 'Mantimentos', items: 0.5 },
//     { title: 'Fim de semana', items: 0.2 },
//     { title: 'Sexta-feira', items: 0.9 },
//     { title: 'Viagem', items: 0.4 },
// ];

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
            {listCards.map((item, index) => (
                <ListCard key={index} name={item.name} items={item.items} />
            ))}

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
