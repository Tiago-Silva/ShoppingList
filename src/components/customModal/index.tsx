import React from 'react';
import * as S from './styles';

interface Props {
    isVisible: boolean;
    title: string;
    onClose: () => void;
}

const CustomModal = ({
    isVisible,
    title,
    onClose
}: Props) => {
    return (
        <S.ModalContainer
            visible={isVisible}
            animationType='slide'
            transparent={true}
            onBackdropPress={onClose}
        >
            <S.Content>
                <S.Title>{title}</S.Title>
            </S.Content>
        </S.ModalContainer>
    );
};

export default CustomModal;
