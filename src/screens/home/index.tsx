import * as S from "./styles";
import {useNavigation} from "@react-navigation/native";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../../types/types";
import Button from "../../components/button";
import ListCard, {PropsListCard} from "../../components/ListCard";

type NavigationProp = StackNavigationProp<RootStackParamList>;

const listCards: PropsListCard[] = [
    { title: 'Compras', items: 0.7 },
    { title: 'Mantimentos', items: 0.5 },
    { title: 'Fim de semana', items: 0.2 },
    { title: 'Sexta-feira', items: 0.9 },
    { title: 'Viagem', items: 0.4 },
];

export const Home = () => {
    const navigation = useNavigation<NavigationProp>();

    const handleNavigation = () => {
        navigation.navigate({name: 'List', params: {} });
    }

    return (
        <S.Container>
            {listCards.map((item, index) => (
                <ListCard key={index} title={item.title} items={item.items} />
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
