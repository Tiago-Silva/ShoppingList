import React from 'react';
import * as S from "./styles";

interface Props {
    isVisible: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const CmRoot = ({
    isVisible,
    onClose,
    children
}: Props) => {
    return (
        <S.ModalContainer
            isVisible={isVisible}
            animationType='slide'
            transparent={true}
            onBackdropPress={onClose}
            testID={'modal-backdrop'}
        >
            {children}
        </S.ModalContainer>
    );
};

export default CmRoot;
