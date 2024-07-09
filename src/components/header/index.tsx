import React from 'react';
import * as S from "./styles";
import IconAnimation from "../animation/IconAnimation";
import {RouteProp, useRoute} from "@react-navigation/native";
import {HeaderRouteParams} from "../../types/types";

type HeaderRouteProp = RouteProp<{ params: HeaderRouteParams }, 'params'>;

interface Props {
    isShow: boolean;
    handleNavigation?: () => void;
}

const Header = ({
    isShow,
    handleNavigation
}: Props) => {

    const route = useRoute<HeaderRouteProp>();
    const name = route.params?.name || 'Minhas Listas';

    const renderHeaderContent = () => {
        if (isShow) {
            return (
                <>
                    {name !== 'Minhas Listas' && <S.Icon name="arrow-left" onPress={handleNavigation}/>}
                    <S.Title>{name}</S.Title>
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
