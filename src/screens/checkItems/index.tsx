import React from 'react';
import * as S from './styles';
import * as Progress from 'react-native-progress';
import {useTheme} from "styled-components";
import {RouteProp, useNavigation, useRoute} from "@react-navigation/native";
import {HeaderRouteParams, RootStackParamList} from "../../types/types";
import Button from "../../components/button";
import {StackNavigationProp} from "@react-navigation/stack";

type NavigationProp = StackNavigationProp<RootStackParamList>;
type HeaderRouteProp = RouteProp<{ params: HeaderRouteParams }, 'params'>;

const CheckItems = () => {
    const theme = useTheme();
    const navigation = useNavigation<NavigationProp>();
    const route = useRoute<HeaderRouteProp>();
    const items = route.params?.items || [];

    const handleNavigationAddItem = () => {
        navigation.navigate({name: 'AddItems', params: {}});
    }

    return (
        <S.Container>
            <S.Header>
                <Progress.Bar
                    progress={0.3}
                    width={350}
                    color={theme.colors.text_bar}
                />
            </S.Header>
            <S.Footer>
                <Button
                    title={'+ ADICIONAR'}
                    width={50}
                    handleOnPress={handleNavigationAddItem}
                />
            </S.Footer>
        </S.Container>
    );
};

export default CheckItems;
