import React from 'react';
import * as S from './styles';

interface Props {
    isVisible: boolean;
    title: string;
    onClose: () => void;
    handleDelete?: () => void;
}

const CustomModal = ({
    isVisible,
    title,
    onClose,
    handleDelete
}: Props) => {
    return (
        <S.ModalContainer
            visible={isVisible}
            animationType='slide'
            transparent={true}
            onBackdropPress={onClose}
        >
            <S.Content>
                <S.Title $size={3}>{title}</S.Title>

                <S.Line>
                    <S.Icon name={'edit-2'} />
                    <S.Title $size={2}>Renomear</S.Title>
                </S.Line>

                <S.Line onPress={handleDelete}>
                    <S.Icon $color={'attention'} name={'trash-2'} />
                    <S.Title
                        $size={2}
                        $color={'attention'}
                    >
                        Excluir
                    </S.Title>
                </S.Line>
            </S.Content>
        </S.ModalContainer>
    );
};

export default CustomModal;
