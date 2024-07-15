import React, {useEffect, useRef, useState} from 'react';
import * as S from './styles';
import IconAnimation from "../animation/IconAnimation";
import LottieView from "lottie-react-native";
import {ItemData} from "../../interface/interface";

interface Props {
    item: ItemData
}

const ItemCard = ({
    item
}: Props) => {
    const animationRef = useRef<LottieView>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handleAnimationIcon = () => {
        if (isPlaying) {
            setIsPlaying(!isPlaying);
            animationRef.current?.play(20,50);
        } else {
            setIsPlaying(!isPlaying);
            animationRef.current?.play(1,20);
        }
    };

    useEffect(() => {
        handleAnimationIcon();
    }, []);

    return (
        <S.Container>
            <S.WrapperIcon onPress={handleAnimationIcon}>
                <IconAnimation
                    animationKey={'checkCircle'}
                    animationRef={animationRef}
                    width={40}
                    height={40}
                    isLoop={false}
                />
            </S.WrapperIcon>
            <S.Title>{item.name}</S.Title>
        </S.Container>
    );
};

export default ItemCard;
