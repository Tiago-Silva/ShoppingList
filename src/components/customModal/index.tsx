import React from 'react';
import * as S from './styles';
import {Input} from "../input";
import IconAnimation from "../animation/IconAnimation";

interface Props {
    isVisible: boolean;
    title: string;
    onClose: () => void;
    handleDelete?: () => void;
    isRename?: boolean;
    isTheme?: boolean;
    handleRename?: () => void;
    handleInputValue?: (value: string) => void;
    handleSelectTheme?: (value: string) => void;
}

const CustomModal = ({
    isVisible,
    title,
    onClose,
    handleDelete,
    isRename = false,
    isTheme = false,
    handleRename,
    handleInputValue,
    handleSelectTheme
}: Props) => {

    const renderContent = () => {
        if (!isTheme) {
            return (
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
            );
        } else {
            return (
                <S.Content>
                    <S.Title $size={3}>{title}</S.Title>

                    <S.Line onPress={() => handleSelectTheme ? handleSelectTheme('dark') : {}}>
                        <S.Icon name={'moon'} />
                        <S.Title
                            $size={2}
                        >
                            Dark
                        </S.Title>
                    </S.Line>

                    <S.Line onPress={() => handleSelectTheme ? handleSelectTheme('light') : {}}>
                        <S.Icon name={'sun'} />
                        <S.Title
                            $size={2}
                        >
                            Light
                        </S.Title>
                    </S.Line>
                </S.Content>
            );
        }
    };

    return (
        <S.ModalContainer
            visible={isVisible}
            animationType='slide'
            transparent={true}
            onBackdropPress={onClose}
        >
            {renderContent()}
        </S.ModalContainer>
    );
};

export default CustomModal;
