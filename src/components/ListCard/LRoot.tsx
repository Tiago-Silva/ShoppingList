import React, { useState } from 'react';
import * as S from './styles';
import { useNavigation } from "@react-navigation/native";
import { ShoppingService } from "../../service/shoppingService";
import { useAppDispatch } from "../../store/modules/hooks";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../types/types";
import { StorageService } from "../../service/storageService";

interface ChildProps {
    onShowModal?: () => void;
    isModalVisible?: boolean;
    isRename?: boolean;
    onRename?: () => void;
    onDeleteList?: () => Promise<void>;
    onSetInputValue?: (value: string) => void;
    handleShowItems?: () => void;
}

interface Props {
    name: string;
    items: any[];
    children?: React.ReactNode;
}

type NavigationProp = StackNavigationProp<RootStackParamList>;

const storageService = new StorageService();

const LRoot = ({ name, items, children }: Props) => {
    const navigation = useNavigation<NavigationProp>();
    const shoppingService = new ShoppingService(storageService, useAppDispatch());
    const isModalVisible = shoppingService.getIsModalVisible();
    const isRename = shoppingService.getIsModalRename();

    const handleShowItems = () => {
        navigation.navigate({ name: 'CheckItems', params: { name, items } });
    }

    const handleShowModal = () => {
        shoppingService.setIsModalVisibleInReducer(!isModalVisible, false);
    }

    const handleRename = async () => {
        if (isRename) {
            const inputValue = shoppingService.getInputValue();
            await shoppingService.updateShoppingListName(name, inputValue ? inputValue : '').then(() => { });
            shoppingService.updateListNameInReducer(name, inputValue ? inputValue : '');
            shoppingService.setIsModalVisibleInReducer(false);
            shoppingService.setIsModalVisibleInReducer(isModalVisible, false);
            shoppingService.clearInputValue();
        }

        shoppingService.setIsModalVisibleInReducer(isModalVisible, !isRename);
    }

    const handleDeleteList = async () => {
        await shoppingService.delete(name).then(() => { });
        shoppingService.deleteListInReducer({ name: name, items: [] });
        shoppingService.setIsModalVisibleInReducer(false);
    }

    const handleSetInputValue = (value: string) => {
        shoppingService.setInputValue(value);
    }

    return (
        <S.Container onPress={handleShowItems} testID={'container-listCard'}>
            {React.Children.map(children, child => {
                if (React.isValidElement<ChildProps>(child)) {
                    return React.cloneElement(child, {
                        isModalVisible,
                        isRename,
                        onShowModal: handleShowModal,
                        onRename: handleRename,
                        onDeleteList: handleDeleteList,
                        onSetInputValue: handleSetInputValue,
                        handleShowItems
                    });
                }
                return child;
            })}
        </S.Container>
    );
};

export default LRoot;
