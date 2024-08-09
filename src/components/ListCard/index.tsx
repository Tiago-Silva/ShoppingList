import React, {useState} from 'react';
import * as S from './styles';
import * as Progress from 'react-native-progress';
import {useTheme} from "styled-components";
import {ShoppingList} from "../../interface/interface";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../../types/types";
import {useNavigation} from "@react-navigation/native";
import {ShoppingService} from "../../service/shoppingService";
import {useAppDispatch} from "../../store/modules/hooks";
import {CustomModal} from "../customModal";
import {StorageService} from "../../service/storageService";

type NavigationProp = StackNavigationProp<RootStackParamList>;

const storageService = new StorageService();

const ListCard = ({
    name,
    items,
}: ShoppingList) => {
    const theme = useTheme();
    const navigation = useNavigation<NavigationProp>();
    const shoppingService = new ShoppingService(storageService, useAppDispatch());
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
        await shoppingService.delete(name).then(() => {});
        shoppingService.deleteListInReducer({name: name, items: []});
        setIsModalVisible(false);
    }

    const handleRename = async () => {
        if (isRename) {
            await shoppingService.updateShoppingListName(name, inputValue).then(() => {});
            shoppingService.updateListNameInReducer(name, inputValue);
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

            <CustomModal.Root
                isVisible={isModalVisible}
                onClose={handleShowModal}
            >
                <CustomModal.Rename
                    title={'Gerenciar lista'}
                    isRename={isRename}
                    onRename={handleRename}
                    onDelete={handleDeleteList}
                    onInputValue={setInputValue}
                />
            </CustomModal.Root>
        </S.Container>
    );
};

export default ListCard;
