import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Header } from '../../../components/header';
import { Providers } from '../../../providers/Providers';

describe('Header.Right Component', () => {
    it('should call onShowModal when icon is pressed', () => {
        const onShowModalMock = jest.fn();
        const { getByTestId } = render(
            <Providers>
                <Header.Right onShowModal={onShowModalMock} />
            </Providers>
        );

        fireEvent.press(getByTestId('right-icon'));
        expect(onShowModalMock).toHaveBeenCalled();
    });
});
