import React from 'react';
import * as S from "./styles";
import IconAnimation from "../animation/IconAnimation";
import { useSelector } from "react-redux";
import { ThemeState } from "../../store/modules/theme/type";

interface Props {
    onShowModal: () => void;
}

const HRight = ({ onShowModal }: Props) => {
    const theme = useSelector<ThemeState>((state: any) => state.theme.currentTheme);

    return (
        <S.WrapperIcon>
            <IconAnimation animationKey={'topperRabbit'} width={50} height={50} top={-17} />
            <S.WrapperTouchIcon onPress={onShowModal}>
                <S.Icon name={theme === 'dark' ? 'moon' : 'sun'} />
            </S.WrapperTouchIcon>
        </S.WrapperIcon>
    );
};

export default HRight;
