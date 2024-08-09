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
import {ListRenderItemInfo} from "react-native";
import {MotiView} from "moti";
import {FadeIn, FadeOut} from "react-native-reanimated";
import {StorageService} from "../../service/storageService";
import {ThemeService} from "../../service/themeService";

type NavigationProp = StackNavigationProp<RootStackParamList>;

const storageService = new StorageService();
const themeService = new ThemeService(storageService);

export const Home = () => {
    const navigation = useNavigation<NavigationProp>();
    const shoppingService = new ShoppingService(storageService, useAppDispatch());

    const listCards = useSelector<IState, ShoppingList[]>((state) => state.cart.shoppingArrayList);
    const [isLoading, setIsLoading] = useState(true);

    const handleNavigation = () => {
        navigation.navigate({name: 'List', params: {} });
    }

    const fetchLists = useCallback(async () => {
        try {
            const lists = await shoppingService.getAll();
            const theme = await themeService.getTheme();
            if (lists && lists.length > 0) {
                lists.forEach((list: ShoppingList) => {
                    if (list.name.length > 0) {
                        shoppingService.addListInReducer(list);
                    }
                });
            }
            if (theme) {
                shoppingService.setThemeInReducer(theme);
            }
        } catch (error) {
            console.error('Erro ao buscar listas e tema:', error);
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        if (isLoading) {
            fetchLists().then(() => {});
        }
    }, [fetchLists]);

    const handleRenderListCard = ({ item }: ListRenderItemInfo<ShoppingList>) => {
        return (
            <MotiView
                from={{ opacity: 0, translateY: 20 }}
                animate={{ opacity: 1, translateY: 0 }}
                exit={{ opacity: 0, translateY: -20 }}
                transition={{type: 'spring'}}
            >
                <ListCard
                    name={item.name}
                    items={item.items}
                />
            </MotiView>
        )
    }

    return (
        <S.Container>
            <S.Content>
                <S.WrapperList
                    data={listCards}
                    keyExtractor={(item: ShoppingList) => item.name}
                    renderItem={handleRenderListCard}
                    entering={FadeIn}
                    exiting={FadeOut}
                />
            </S.Content>

            <S.Footer>
                <Button
                    title={'+ Nova Lista'}
                    width={50}
                    onPress={handleNavigation}
                />
            </S.Footer>
        </S.Container>
    );
}
