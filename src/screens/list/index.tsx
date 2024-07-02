import Button from "../../components/button";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../../types/types";
import {useNavigation} from "@react-navigation/native";
import * as S from "./styles";

type NavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

export const List = () => {
    const navigation = useNavigation<NavigationProp>();

    const handleNavigation = () => {
        navigation.reset({
            index: 0,
            routes: [{name: 'Home'}]
        })
    }

    return (
        <S.Container>
            <Button
                title="Home"
                handleNavigation={handleNavigation}
            />
        </S.Container>
    );
}
