import * as S from "./styles";
import React from "react";
import {Input} from "../../components/input";
import Button from "../../components/button";


export const List = () => {
    return (
        <S.Container>
            <S.Header>
                <S.Title>
                    Alguma imagem
                </S.Title>
                <Input
                    placeholder={'Nova Lista'}
                />
            </S.Header>

            <S.Footer>
                <Button title={'CRIAR'} handleNavigation={() => {}} />
            </S.Footer>
        </S.Container>
    );
}
