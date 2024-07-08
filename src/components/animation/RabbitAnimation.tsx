import React from 'react';
import LottieView from 'lottie-react-native';

const animations = {
    topperRabbit: require('../../../assets/animation/icons/topper-rabbit.json'),
};

interface Props {
    animationKey?: keyof typeof animations; // Use the keys of the animations object
    width?: number;
    height?: number;
    top?: number;
}

const RabbitAnimation = ({
    animationKey = 'topperRabbit',
    width = 100,
    height = 100,
    top
}: Props) => {
    return (
        <LottieView
            source={animations[animationKey]}
            autoPlay
            loop
            style={
                {
                    width: width,
                    height: height,
                    top: top
                }
            }
            resizeMode={'cover'}
        />
    );
};

export default RabbitAnimation;
