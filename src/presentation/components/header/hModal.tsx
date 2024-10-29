import React from 'react';
import {CustomModal} from "../customModal";
import {HeaderService} from "../../../infrastructure/data/service/headerService";
import {StorageService} from "../../../infrastructure/data/service/storageService";
import {ThemeService} from "../../../infrastructure/data/service/themeService";

interface Props {
    isModalVisible?: boolean;
    onShowModal: () => void;
}

const storageService = new StorageService();
const themeService = new ThemeService(storageService);
const headerService = new HeaderService(themeService);

const HModal = ({
    isModalVisible = false,
    onShowModal
}: Props) => {
    const handleSelectTheme = headerService.handleSelectTheme(onShowModal);

    return (
        <CustomModal.Root isVisible={isModalVisible} onClose={onShowModal}>
            <CustomModal.Theme title={'Escolha um tema'} onSelectTheme={handleSelectTheme} />
        </CustomModal.Root>
    );
};

export default HModal;
