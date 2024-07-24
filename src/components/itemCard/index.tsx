import React, {useEffect, useRef, useState} from 'react';
import * as S from './styles';
import IconAnimation from "../animation/IconAnimation";
import LottieView from "lottie-react-native";
import {ItemData} from "../../interface/interface";
import {ShoppingService} from "../../service/shoppingService";
import {useAppDispatch} from "../../store/modules/hooks";
import {updateShoppingList} from "../../store/modules/shoppingList/actions";
import {Content} from "./styles";

interface Props {
    name: string;
    item: ItemData;
}

const ItemCard = ({
    name,
    item
}: Props) => {
    const dispatch = useAppDispatch();
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

    const handleUpdateItem = async () => {
        handleAnimationIcon();

        const updatedItem = { ...item, checked: isPlaying }
        await ShoppingService.updateItem(name, updatedItem);

        const updatedShoppingList = await ShoppingService.getShoppingList(name);
        dispatch(updateShoppingList(updatedShoppingList));
    }

    useEffect(() => {
        handleAnimationIcon();
    }, []);

    return (
        <S.Container $isPlayng={isPlaying}>
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
                <S.Title>{item.name}</S.Title>
            </S.Content>

            <S.Content>
                <S.Title>{item.quantity}</S.Title>
            </S.Content>
        </S.Container>
    );
};

export default ItemCard;
