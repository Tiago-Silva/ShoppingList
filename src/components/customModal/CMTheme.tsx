import React from 'react';
import CMContent from "./CMContent";
import CmTitle from "./CMTitle";
import CMLine from "./CMLine";
import {ThemeType} from "../../store/modules/theme/type";
import * as S from "./styles";

interface Props {
    title: string;
    onSelectTheme?: (value: ThemeType) => void;
}

const CmTheme = ({
    title,
    onSelectTheme
}: Props) => {
    return (
        <CMContent title={title}>
            <CmTitle title={title} size={2} />
            <CMLine onEvent={() => onSelectTheme ? onSelectTheme('dark') : {}}>
                <S.Icon name={'moon'} />
                <CmTitle title={'Dark'} size={2} />
            </CMLine>

            <CMLine onEvent={() => onSelectTheme ? onSelectTheme('light') : {}}>
                <S.Icon name={'sun'} />
                <CmTitle title={'Light'} size={2} />
            </CMLine>
        </CMContent>
    );
};

export default CmTheme;
