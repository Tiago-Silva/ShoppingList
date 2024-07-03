import React from 'react';
import LottieView from 'lottie-react-native';

const RabbitAnimation = () => {
    return (
        <LottieView
            source={require('../../../assets/animation/icons/topper-rabbit.json')}
            autoPlay
            loop
            style={{ width: 50, height: 50, top: -20 }}
        />
    );
};

export default RabbitAnimation;
