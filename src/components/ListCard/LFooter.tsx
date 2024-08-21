import React from 'react';
import * as Progress from 'react-native-progress';
import * as S from "./styles";
import {ItemData} from "../../interface/interface";
import {useTheme} from "styled-components";

interface Props {
    items: ItemData[];
}

const LFooter = ({
    items
}: Props) => {
    const theme = useTheme();
    return (
        <S.Footer>
            <Progress.Bar
                progress={
                    items.length > 0
                        ? items.filter((item) => item.checked).length / items.length
                        : 0
                }
                width={350}
                color={theme.colors.text_bar}
                testID={'progress-bar'}
            />
        </S.Footer>
    );
};

export default LFooter;
