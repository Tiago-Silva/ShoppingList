import React from 'react';
import { useAppDispatch } from "../../store/modules/hooks";
import { setTheme } from "../../store/modules/theme/actions";
import { ThemeType } from "../../store/modules/theme/type";
import { ThemeService } from "../../service/themeService";
import {CustomModal} from "../customModal";

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
        <CustomModal.Root isVisible={isVisible} onClose={onShowModal}>
            <CustomModal.Theme title={'Escolha um tema'} onSelectTheme={handleSelectTheme} />
        </CustomModal.Root>
    );
};

export default HModal;
