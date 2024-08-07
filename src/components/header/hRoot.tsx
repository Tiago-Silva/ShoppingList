import React, { useState } from 'react';
import * as S from "./styles";

interface Props {
    background?: string;
    children?: React.ReactNode;
}

interface ChildProps {
    onShowModal?: () => void;
    isVisible?: boolean;
}

const HRoot = ({ background = 'background_card', children }: Props) => {
    const [isVisible, setIsVisible] = useState(false);

    const handleShowModal = () => {
        setIsVisible(!isVisible);
    };

    return (
        <S.Container $background={background}>
            {React.Children.map(children, child => {
                if (React.isValidElement<ChildProps>(child)) {
                    return React.cloneElement(child, { onShowModal: handleShowModal, isVisible });
                }
                return child;
            })}
        </S.Container>
    );
};

export default HRoot;
