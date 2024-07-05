import * as S from "./styles";
import {useNavigation} from "@react-navigation/native";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../../types/types";
import Button from "../../components/button";
import ListCard from "../../components/ListCard";


type NavigationProp = StackNavigationProp<RootStackParamList>;

export const Home = () => {
    const navigation = useNavigation<NavigationProp>();

    const handleNavigation = () => {
        navigation.navigate({name: 'List', params: {} });
    }

    return (
        <S.Container>
            <ListCard />

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
