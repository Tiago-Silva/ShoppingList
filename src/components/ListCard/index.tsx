import React, {useState} from 'react';
import * as S from './styles';
import * as Progress from 'react-native-progress';
import {useTheme} from "styled-components";
import {ShoppingList} from "../../interface/interface";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../../types/types";
import {useNavigation} from "@react-navigation/native";
import {ShoppingService} from "../../service/shoppingService";
import {deleteShoppingList, updateShoppingListName} from "../../store/modules/shoppingList/actions";
import {useAppDispatch} from "../../store/modules/hooks";
import CustomModal from "../customModal";

type NavigationProp = StackNavigationProp<RootStackParamList>;


const ListCard = ({
    name,
    items,
}: ShoppingList) => {
    const theme = useTheme();
    const navigation = useNavigation<NavigationProp>();
    const dispatch = useAppDispatch();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isRename, setIsRename] = useState(false);
    const [inputValue, setInputValue] = useState('');


    const handleShowItems = () => {
        navigation.navigate({name: 'CheckItems', params: {name, items} });
    }

    const handleShowModal = () => {
        setIsModalVisible(!isModalVisible);
        setIsRename(false);
    }

    const handleDeleteList = async () => {
        await ShoppingService.delete({name: name, items: []}).then(() => {});
        dispatch(deleteShoppingList({name: name, items: []}));
        setIsModalVisible(false);
    }

    const handleRename = async () => {
        if (isRename) {
            await ShoppingService.updateShoppingListName(name, inputValue).then(() => {});
            dispatch(updateShoppingListName(name, inputValue));
            setIsModalVisible(false);
            setIsRename(false);
            setInputValue('');
        }

        setIsRename(!isRename);
    }

    return (
        <S.Container onPress={handleShowItems}>
            <S.Header>
                <S.Title>{name}</S.Title>
                <S.Wrapper onPress={handleShowModal}>
                    <S.Icon name={'more-vertical'} />
                </S.Wrapper>
            </S.Header>
            <S.Footer>
                <Progress.Bar
                    progress={items.length > 0 ? items.filter((item) => item.checked).length / items.length : 0}
                    width={310}
                    color={theme.colors.text_bar}
                />
            </S.Footer>

            <CustomModal
                isVisible={isModalVisible}
                title={'Gerenciar lista'}
                onClose={handleShowModal}
                handleDelete={handleDeleteList}
                isRename={isRename}
                handleRename={handleRename}
                handleInputValue={setInputValue}
            />
        </S.Container>
    );
};

export default ListCard;
