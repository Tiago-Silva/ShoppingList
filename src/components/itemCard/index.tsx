import React, {useEffect, useRef, useState} from 'react';
import * as S from './styles';
import IconAnimation from "../animation/IconAnimation";
import LottieView from "lottie-react-native";
import {ItemData} from "../../interface/interface";
import {ShoppingService} from "../../service/shoppingService";
import {useAppDispatch} from "../../store/modules/hooks";
import {updateShoppingList} from "../../store/modules/shoppingList/actions";
import CustomModal from "../customModal";

interface Props {
    name: string;
    item: ItemData;
}

const ItemCard = ({
    name,
    item,
}: Props) => {
    const dispatch = useAppDispatch();
    const animationRef = useRef<LottieView>(null);
    const [isPlaying, setIsPlaying] = useState(item.checked || false);
    const [isVisible, setIsVisible] = useState(false);
    const [isRename, setIsRename] = useState(false);
    const [inputValue, setInputValue] = useState('');

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
        const updatedShoppingList = await ShoppingService.getShoppingList(name);
        dispatch(updateShoppingList(updatedShoppingList));
    }

    const handleUpdateItem = async () => {
        handleAnimationIcon();

        const updatedItem = { ...item, checked: isPlaying }
        await ShoppingService.updateItem(name, updatedItem);

        await updateListInReducer();
    }

    useEffect(() => {
        handleAnimationIcon();
    }, []);

    const handleShowModal = () => {
        setIsVisible(!isVisible);
        setIsRename(false);
    }

    const handleDeleteItem = async () => {
        await ShoppingService.deleteItemFromList(name, item);
        await updateListInReducer();

        setIsVisible(false);
    }

    const handleRename = async () => {
        if (isRename) {
            const updatedItem = { ...item, name: inputValue }
            await ShoppingService.updateItemName(name, item, updatedItem);
            await updateListInReducer();
            setIsVisible(false);
            setInputValue('');
        }

        setIsRename(!isRename);
    };

    return (
        <S.Container $isPlayng={isPlaying} onLongPress={handleShowModal}>
            <S.Content>
                <S.WrapperIcon onPress={handleUpdateItem}>
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

            <CustomModal
                isVisible={isVisible}
                title={'Gerenciar itens'}
                onClose={handleShowModal}
                onDelete={handleDeleteItem}
                isRename={isRename}
                onRename={handleRename}
                onInputValue={setInputValue}
            />
        </S.Container>
    );
};

export default ItemCard;
