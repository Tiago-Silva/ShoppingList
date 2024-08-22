import React, {useEffect, useRef, useState} from 'react';
import * as S from './styles';
import IconAnimation from "../animation/IconAnimation";
import LottieView from "lottie-react-native";
import {ItemData} from "../../interface/interface";
import {ShoppingService} from "../../service/shoppingService";
import {useAppDispatch} from "../../store/modules/hooks";
import {CustomModal} from "../customModal";
import {StorageService} from "../../service/storageService";

interface Props {
    name: string;
    item: ItemData;
}

const storageService = new StorageService();

const ItemCard = ({
    name,
    item,
}: Props) => {
    const shoppingService = new ShoppingService(storageService, useAppDispatch());
    const isVisible = shoppingService.getIsModalVisible();
    const isRename = shoppingService.getIsModalRename();

    const animationRef = useRef<LottieView>(null);
    const [isPlaying, setIsPlaying] = useState(item.checked || false);

    const handleAnimationIcon = () => {
        if (isPlaying) {
            setIsPlaying(!isPlaying);
            animationRef.current?.play(20,50);
        } else {
            setIsPlaying(!isPlaying);
            animationRef.current?.play(1,20);
        }
    };

    const updateListInReducer = async () => {
        const updatedShoppingList = await shoppingService.getShoppingList(name);
        shoppingService.updateListInReducer(updatedShoppingList);
    }

    const handleUpdateItem = async () => {
        handleAnimationIcon();

        const updatedItem = { ...item, checked: isPlaying }
        await shoppingService.updateItem(name, updatedItem);

        await updateListInReducer();
    }

    useEffect(() => {
        handleAnimationIcon();
    }, []);

    const handleShowModal = () => {
        shoppingService.setIsModalVisibleInReducer(!isVisible, false);
    }

    const handleDeleteItem = async () => {
        await shoppingService.deleteItemFromList(name, item.name);
        await updateListInReducer();

        shoppingService.setIsModalVisibleInReducer(false, false);
    }

    const handleRename = async () => {
        if (isRename) {
            const inputValue = shoppingService.getInputValue();
            const updatedItem = { ...item, name: inputValue ? inputValue : item.name };
            await shoppingService.updateItemName(name, item, updatedItem);
            await updateListInReducer();
            shoppingService.setIsModalVisibleInReducer(false);
            shoppingService.clearInputValue();
        }

        shoppingService.setIsModalVisibleInReducer(false, !isRename);
    };

    return (
        <S.Container $isPlayng={isPlaying} onLongPress={handleShowModal}>
            <S.Content>
                <S.WrapperIcon onPress={handleUpdateItem} testID="icon-button">
                    <IconAnimation
                        animationKey={'checkCircle'}
                        animationRef={animationRef}
                        width={40}
                        height={40}
                        isLoop={false}
                        top={-7}
                    />
                </S.WrapperIcon>
                <S.Title $isPlayng={isPlaying}>{item.name}</S.Title>
            </S.Content>

            <S.Content>
                <S.Title $isPlayng={isPlaying}>{item.quantity}</S.Title>
            </S.Content>

            <CustomModal.Root isVisible={isVisible} onClose={handleShowModal}>
                <CustomModal.Rename
                    title={'Gerenciar itens'}
                    onRename={handleRename}
                    onDelete={handleDeleteItem}
                />
            </CustomModal.Root>
        </S.Container>
    );
};

export default ItemCard;
