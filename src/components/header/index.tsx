import React, {useState} from 'react';
import * as S from "./styles";
import IconAnimation from "../animation/IconAnimation";
import {RouteProp, useRoute} from "@react-navigation/native";
import {HeaderRouteParams} from "../../types/types";
import CustomModal from "../customModal";
import {useAppDispatch} from "../../store/modules/hooks";
import {setTheme} from "../../store/modules/theme/actions";
import {useSelector} from "react-redux";
import {ThemeState, ThemeType} from "../../store/modules/theme/type";
import {ThemeService} from "../../service/themeService";

type HeaderRouteProp = RouteProp<{ params: HeaderRouteParams }, 'params'>;

interface Props {
    isShow: boolean;
    handleNavigation?: () => void;
    background?: string;
}

const Header = ({
    isShow,
    handleNavigation,
    background = 'background_header'
}: Props) => {
    const dispatch = useAppDispatch();
    const theme = useSelector<ThemeState>((state: any) => state.theme.currentTheme);
    const route = useRoute<HeaderRouteProp>();
    const name = route.params?.name || 'Minhas Listas';
    const [isVisible, setIsVisible] = useState(false);

    const handleSelectTheme = (value: ThemeType) => {
        ThemeService.setTheme(value).then(() => {});
        dispatch(setTheme({currentTheme: value}));
        setIsVisible(false);
    }

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
                        <S.WrapperTouchIcon onPress={handleShowModal}>
                            <S.Icon name={theme === 'dark' ? 'moon' : 'sun'} />
                        </S.WrapperTouchIcon>
                    </S.WrapperIcon>
                </>
            );
        } else {
            return <S.Icon name="arrow-left" onPress={handleNavigation}/>;
        }
    };

    const handleShowModal = () => {
        setIsVisible(!isVisible);
    }

    return (
        <S.Container $background={background}>
            {renderHeaderContent()}

            <CustomModal
                isVisible={isVisible}
                title={'Ecolha um tema'}
                onClose={handleShowModal}
                isTheme={true}
                handleSelectTheme={handleSelectTheme}
            />
        </S.Container>
    );
};

export default Header;
