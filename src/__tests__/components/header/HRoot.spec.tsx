import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Header } from '../../../presentation/components/header';
import { Providers } from '../../../presentation/providers/Providers';

jest.mock('@react-native-async-storage/async-storage');

const renderWithTheme = (component: React.ReactElement) => {
    return render(<Providers>{component}</Providers>);
};

describe('Header.Root Component', () => {
    it('should render correctly with children', () => {
        const { getByText } = renderWithTheme(
            <Header.Root>
                <Header.Title name="Test Title" />
            </Header.Root>
        );

        expect(getByText('Test Title')).toBeTruthy();
    });
});
