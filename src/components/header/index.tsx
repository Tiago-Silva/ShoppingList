import React from 'react';
import * as S from "./styles";
import IconAnimation from "../animation/IconAnimation";

interface Props {
    isShow: boolean;
    handleNavigation?: () => void;
}

const Header = ({
    isShow,
    handleNavigation
}: Props) => {

    const renderHeaderContent = () => {
        if (isShow) {
            return (
                <>
                    <S.Title>Minhas listas</S.Title>
                    <S.WrapperIcon>
                        <IconAnimation
                            animationKey={'topperRabbit'}
                            width={50}
                            height={50}
                            top={-17}
                        />
                        <S.Icon name="more-vertical" />
                    </S.WrapperIcon>
                </>
            );
        } else {
            return <S.Icon name="arrow-left" onPress={handleNavigation}/>;
        }
    };

    return (
        <S.Container>
            {renderHeaderContent()}
        </S.Container>
    );
};

export default Header;
