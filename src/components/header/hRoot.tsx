import React, { useState } from 'react';
import * as S from "./styles";
import {StorageService} from "../../service/storageService";
import {ShoppingService} from "../../service/shoppingService";
import {useAppDispatch} from "../../store/modules/hooks";

interface Props {
    background?: string;
    children?: React.ReactNode;
}

interface ChildProps {
    onShowModal?: () => void;
    isVisible?: boolean;
}

const storageService = new StorageService();

const HRoot = ({ background = 'background_card', children }: Props) => {
    const shoppingService = new ShoppingService(storageService, useAppDispatch());
    const isModalVisible = shoppingService.getIsModalVisible();

    const handleShowModal = () => {
        shoppingService.setIsModalVisibleInReducer(!isModalVisible, false);
    };

    return (
        <S.Container $background={background}>
            {React.Children.map(children, child => {
                if (React.isValidElement<ChildProps>(child)) {
                    return React.cloneElement(child, { onShowModal: handleShowModal, isVisible: isModalVisible });
                }
                return child;
            })}
        </S.Container>
    );
};

export default HRoot;
