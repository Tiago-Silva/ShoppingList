import React from 'react';
import * as S from "./styles";

interface Props {
    children: React.ReactNode;
    title: string;
}

interface ChildProps {
    title: string;
}

const CmContent = ({
    children,
    title
}: Props) => {
    return (
        <S.Content>
            {React.Children.map(children, child => {
                if (React.isValidElement<ChildProps>(child)) {
                    return React.cloneElement(child, { title });
                }
                return child;
            })}
        </S.Content>
    );
};

export default CmContent;
