import React from 'react';
import CMContent from "./CMContent";
import CmTitle from "./CMTitle";
import CMLine from "./CMLine";
import * as S from "./styles";
import {Input} from "../input";

interface Props {
    title: string;
    isRename?: boolean;
    onRename?: () => void;
    onDelete?: () => void;
    onInputValue?: (value: string) => void;
}

const CmRename = ({
    title,
    isRename = false,
    onRename,
    onDelete,
    onInputValue
}: Props) => {
    return (
        <CMContent title={title}>
            <CmTitle title={title} size={3} />

            <CMLine onEvent={onRename}>
                <S.Icon name={'edit-2'} />
                {!isRename ? (
                    <CmTitle title={'Renomear'} size={2} />
                ) : (
                    <Input
                        placeholder={'Novo nome'}
                        height={4}
                        width={30}
                        fontSize={12}
                        onChangeText={onInputValue}
                    />
                )}
            </CMLine>

            <CMLine onEvent={onDelete}>
                <S.Icon $color={'attention'} name={'trash-2'} />
                <CmTitle title={'Excluir'} size={2}  color={'attention'}/>
            </CMLine>
        </CMContent>
    );
};

export default CmRename;
