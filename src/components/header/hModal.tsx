import React from 'react';
import CustomModal from "../customModal";
import { useAppDispatch } from "../../store/modules/hooks";
import { setTheme } from "../../store/modules/theme/actions";
import { ThemeType } from "../../store/modules/theme/type";
import { ThemeService } from "../../service/themeService";

interface Props {
    isVisible?: boolean;
    onShowModal: () => void;
}

const HModal = ({ isVisible = false, onShowModal }: Props) => {
    const dispatch = useAppDispatch();

    const handleSelectTheme = (value: ThemeType) => {
        ThemeService.setTheme(value).then(() => {});
        dispatch(setTheme({ currentTheme: value }));
        onShowModal();
    };

    return (
        <CustomModal
            isVisible={isVisible}
            title={'Escolha um tema'}
            onClose={onShowModal}
            isTheme={true}
            onSelectTheme={handleSelectTheme}
        />
    );
};

export default HModal;
