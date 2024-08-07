import React from 'react';
import * as S from './styles';

interface Props {
    children: React.ReactNode;
    onEvent?: () => void;
}

const CmLine = ({
    children,
    onEvent
}: Props) => {
    return (
        <S.Line onPress={onEvent}>
            {children}
        </S.Line>
    );
};

export default CmLine;
