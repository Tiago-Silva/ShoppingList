import React from 'react';
import * as S from "./styles";

interface Props {
    name: string;
    onShowModal: () => void;
}

const LHeader = ({
    name,
    onShowModal
}: Props) => {
    return (
        <S.Header>
            <S.Title>{name}</S.Title>
            <S.Wrapper onPress={onShowModal} testID={'icon-button-listCard'}>
                <S.Icon name={'more-vertical'} />
            </S.Wrapper>
        </S.Header>
    );
};

export default LHeader;
