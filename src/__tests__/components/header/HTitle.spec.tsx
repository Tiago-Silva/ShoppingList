import React from 'react';
import { render } from '@testing-library/react-native';
import { Header } from '../../../components/header';
import { Providers } from '../../../providers/Providers';

describe('Header.Title Component', () => {
    it('should render title correctly', () => {
        const { getByText } = render(
            <Providers>
                <Header.Title name="Test Title" />
            </Providers>
        );

        expect(getByText('Test Title')).toBeTruthy();
    });
});
