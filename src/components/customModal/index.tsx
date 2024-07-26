import React from 'react';
import * as S from './styles';
import {Input} from "../input";

interface Props {
    isVisible: boolean;
    title: string;
    onClose: () => void;
    handleDelete?: () => void;
    isRename?: boolean;
    handleRename?: () => void;
    handleInputValue?: (value: string) => void;
}

const CustomModal = ({
    isVisible,
    title,
    onClose,
    handleDelete,
    isRename = false,
    handleRename,
    handleInputValue
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

                <S.Line onPress={handleRename}>
                    <S.Icon name={'edit-2'} />
                    {!isRename ? (
                        <S.Title $size={2}>Renomear</S.Title>
                    ) : (
                        <Input
                            placeholder={'Novo nome'}
                            height={4}
                            width={30}
                            fontSize={12}
                            onChangeText={handleInputValue}
                        />
                    )}
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
