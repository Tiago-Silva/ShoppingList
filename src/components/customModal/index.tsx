import React from 'react';
import * as S from './styles';
import {Input} from "../input";
import {ThemeType} from "../../store/modules/theme/type";

interface Props {
    isVisible: boolean;
    title: string;
    onClose: () => void;
    onDelete?: () => void;
    isRename?: boolean;
    isTheme?: boolean;
    onRename?: () => void;
    onInputValue?: (value: string) => void;
    onSelectTheme?: (value: ThemeType) => void;
}

const CustomModal = ({
    isVisible,
    title,
    onClose,
    onDelete,
    isRename = false,
    isTheme = false,
    onRename,
    onInputValue,
    onSelectTheme
}: Props) => {

    const renderContent = () => {
        if (!isTheme) {
            return (
                <S.Content>
                    <S.Title $size={3}>{title}</S.Title>

                    <S.Line onPress={onRename}>
                        <S.Icon name={'edit-2'} />
                        {!isRename ? (
                            <S.Title $size={2}>Renomear</S.Title>
                        ) : (
                            <Input
                                placeholder={'Novo nome'}
                                height={4}
                                width={30}
                                fontSize={12}
                                onChangeText={onInputValue}
                            />
                        )}
                    </S.Line>

                    <S.Line onPress={onDelete}>
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

                    <S.Line onPress={() => onSelectTheme ? onSelectTheme('dark') : {}}>
                        <S.Icon name={'moon'} />
                        <S.Title
                            $size={2}
                        >
                            Dark
                        </S.Title>
                    </S.Line>

                    <S.Line onPress={() => onSelectTheme ? onSelectTheme('light') : {}}>
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
            isVisible={isVisible}
            animationType='slide'
            transparent={true}
            onBackdropPress={onClose}
            testID={'modal-backdrop'}
        >
            {renderContent()}
        </S.ModalContainer>
    );
};

export default CustomModal;
