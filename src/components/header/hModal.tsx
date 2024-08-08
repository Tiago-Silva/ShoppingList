import React from 'react';
import {CustomModal} from "../customModal";
import {HeaderService} from "../../service/headerService";

interface Props {
    isVisible?: boolean;
    onShowModal: () => void;
}

const HModal = ({ isVisible = false, onShowModal }: Props) => {
    const handleSelectTheme = HeaderService.handleSelectTheme(onShowModal);

    return (
        <CustomModal.Root isVisible={isVisible} onClose={onShowModal}>
            <CustomModal.Theme title={'Escolha um tema'} onSelectTheme={handleSelectTheme} />
        </CustomModal.Root>
    );
};

export default HModal;
