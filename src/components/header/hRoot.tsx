import React, { useState } from 'react';
import * as S from "./styles";

interface Props {
    background?: string;
    children?: React.ReactNode;
}

interface ChildProps {
    onShowModal?: () => void;
    isModalVisible?: boolean;
}

const HRoot = ({ background = 'background_card', children }: Props) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleShowModal = () => {
        setIsModalVisible(!isModalVisible);
    };

    return (
        <S.Container $background={background}>
            {React.Children.map(children, child => {
                if (React.isValidElement<ChildProps>(child)) {
                    return React.cloneElement(child, { onShowModal: handleShowModal, isModalVisible });
                }
                return child;
            })}
        </S.Container>
    );
};

export default HRoot;
