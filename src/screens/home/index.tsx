import * as S from "./styles";
import {useNavigation} from "@react-navigation/native";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../../types/types";
import Button from "../../components/button";


type NavigationProp = StackNavigationProp<RootStackParamList, 'List'>;

export const Home = () => {
    const navigation = useNavigation<NavigationProp>();

    const handleNavigation = () => {
        navigation.reset({
            index: 1,
            routes: [{name: 'List'}]
        })
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
