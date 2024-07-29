import * as S from "./styles";
import {useNavigation} from "@react-navigation/native";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../../types/types";
import Button from "../../components/button";
import ListCard from "../../components/ListCard";
import {useCallback, useEffect, useState} from "react";
import {ShoppingList} from "../../interface/interface";
import {ShoppingService} from "../../service/shoppingService";
import {useAppDispatch} from "../../store/modules/hooks";
import {useSelector} from "react-redux";
import {IState} from "../../store/modules/shoppingList/type";
import {addShoppingList} from "../../store/modules/shoppingList/actions";
import {ListRenderItemInfo} from "react-native";
import {ThemeService} from "../../service/themeService";
import {setTheme} from "../../store/modules/theme/actions";

type NavigationProp = StackNavigationProp<RootStackParamList>;

export const Home = () => {
    const navigation = useNavigation<NavigationProp>();
    const dispatch = useAppDispatch();
    const listCards = useSelector<IState, ShoppingList[]>((state) => state.cart.shoppingArrayList);
    const [isLoaded, setIsLoaded] = useState(false);

    const handleNavigation = () => {
        navigation.navigate({name: 'List', params: {} });
    }

    const fetchLists = useCallback(async () => {
        const lists = await ShoppingService.getAll();
        const theme = await ThemeService.getTheme();
        if (lists.length > 0) {
            lists.forEach((list: ShoppingList) => {
                if (list.name.length > 0) {
                    dispatch(addShoppingList(list));
                }
            });
        }
        if (theme) {
            dispatch(setTheme({currentTheme: theme}));
        }
        setIsLoaded(true);
    }, [dispatch]);

    useEffect(() => {
        if (!isLoaded) {
            fetchLists().then(() => {});
        }
    }, [isLoaded, fetchLists]);

    const handleRenderListCard = ({ item }: ListRenderItemInfo<ShoppingList>) => {
        return (
            <ListCard
                name={item.name}
                items={item.items}
            />
        )
    }

    return (
        <S.Container>
            <S.Content>
                <S.WrapperList
                    data={listCards}
                    keyExtractor={(item: ShoppingList) => item.name}
                    renderItem={handleRenderListCard}
                />
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
