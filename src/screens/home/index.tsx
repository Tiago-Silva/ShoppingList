import * as S from "./styles";
import {useNavigation} from "@react-navigation/native";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../../types/types";
import Button from "../../components/button";


type NavigationProp = StackNavigationProp<RootStackParamList>;

export const Home = () => {
    const navigation = useNavigation<NavigationProp>();

    const handleNavigation = () => {
        navigation.navigate({name: 'List', params: {} });
    }

    return (
        <S.Container>
            <S.WrapperButton>
                <Button
                    title={'+ Nova Lista'}
                    handleNavigation={handleNavigation}
                />
            </S.WrapperButton>
        </S.Container>
    );
}
