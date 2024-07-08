import React from 'react';
import LottieView from 'lottie-react-native';

const animations = {
    topperRabbit: require('../../../assets/animation/icons/topper-rabbit.json'),
    checkList: require('../../../assets/animation/icons/checkList02.json'),
};

interface Props {
    animationKey?: keyof typeof animations; // Use the keys of the animations object
    width?: number;
    height?: number;
    top?: number;
    marginBottom?: number;
}

const IconAnimation = ({
    animationKey = 'topperRabbit',
    width = 100,
    height = 100,
    top,
    marginBottom
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
                    top: top,
                    marginBottom: marginBottom
                }
            }
            resizeMode={'cover'}
        />
    );
};

export default IconAnimation;
