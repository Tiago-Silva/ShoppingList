import {ThemeState} from "../../store/modules/theme/type";
import IconAnimation from "../animation/IconAnimation";
import * as S from "./styles";
import {useSelector} from "react-redux";

const HContent = ({
    name,
    onNavigation,
    onShowModal
}: {
    name: string;
    onNavigation?: () => void;
    onShowModal: () => void;
}) => {
    const theme = useSelector<ThemeState>((state: any) => state.theme.currentTheme);
    return (
        <>
            {name !== 'Minhas Listas' && <S.Icon name="arrow-left" onPress={onNavigation}/>}
            <S.Title>{name}</S.Title>
            <S.WrapperIcon>
                <IconAnimation animationKey={'topperRabbit'} width={50} height={50} top={-17}/>
                <S.WrapperTouchIcon onPress={onShowModal}>
                    <S.Icon name={theme === 'dark' ? 'moon' : 'sun'}/>
                </S.WrapperTouchIcon>
            </S.WrapperIcon>
        </>
    )
};

export default HContent;
