import React from 'react';
import * as S from "./styles";

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
