import React from 'react';
import {CustomModal} from "../customModal";

interface Props {
    name: string;
    isModalVisible: boolean;
    isRename: boolean;
    onShowModal: () => void;
    onRename: () => void;
    onDeleteList: () => Promise<void>;
    onSetInputValue: (value: string) => void;
}

const LModal = ({
    name,
    isModalVisible,
    isRename,
    onShowModal,
    onRename,
    onDeleteList,
    onSetInputValue
}: Props) => {
    return (
        <CustomModal.Root isVisible={isModalVisible} onClose={onShowModal}>
            <CustomModal.Rename
                title={name}
                isRename={isRename}
                onRename={onRename}
                onDelete={onDeleteList}
                onInputValue={onSetInputValue}
            />
        </CustomModal.Root>
    );
};

export default LModal;
