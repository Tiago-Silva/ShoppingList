import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Header } from '../../../components/header';
import { Providers } from '../../../providers/Providers';

describe('Header.Left Component', () => {
    it('should call onNavigation when icon is pressed', () => {
        const onNavigationMock = jest.fn();
        const { getByTestId } = render(
            <Providers>
                <Header.Left onNavigation={onNavigationMock} />
            </Providers>
        );

        fireEvent.press(getByTestId('left-icon'));
        expect(onNavigationMock).toHaveBeenCalled();
    });
});
