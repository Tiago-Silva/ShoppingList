import React from 'react';
import {CustomModal} from "../customModal";
import {HeaderService} from "../../service/headerService";
import {StorageService} from "../../service/storageService";
import {ThemeService} from "../../service/themeService";

interface Props {
    isVisible?: boolean;
    onShowModal: () => void;
}

const storageService = new StorageService();
const themeService = new ThemeService(storageService);
const headerService = new HeaderService(themeService);

const HModal = ({ isVisible = false, onShowModal }: Props) => {
    const handleSelectTheme = headerService.handleSelectTheme(onShowModal);

    return (
        <CustomModal.Root isVisible={isVisible} onClose={onShowModal}>
            <CustomModal.Theme title={'Escolha um tema'} onSelectTheme={handleSelectTheme} />
        </CustomModal.Root>
    );
};

export default HModal;
