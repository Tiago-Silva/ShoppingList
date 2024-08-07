import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Button from "../../../components/button";
import { ThemeProvider } from 'styled-components/native';
import {darkTheme} from "../../../global/theme";

const renderWithTheme = (component: React.ReactElement) => {
    return render(<ThemeProvider theme={darkTheme}>{component}</ThemeProvider>);
};

describe('Button Component', () => {
    it('renders correctly', () => {
        const { getByText } = renderWithTheme(<Button title="CRIAR" onPress={() => {}} />);
        expect(getByText('CRIAR')).toBeTruthy();
    });

    it('displays the correct title', () => {
        const { getByText } = renderWithTheme(<Button title="CRIAR" onPress={() => {}} />);
        expect(getByText('CRIAR')).toBeTruthy();
    });

    it('calls handleOnPress when pressed', () => {
        const handleOnPress = jest.fn();
        const { getByText } = renderWithTheme(<Button title="CRIAR" onPress={handleOnPress} />);
        fireEvent.press(getByText('CRIAR'));
        expect(handleOnPress).toHaveBeenCalled();
    });

    it('applies the correct width', () => {
        const { getByTestId } = renderWithTheme(<Button title="CRIAR" width={200} onPress={() => {}} />);
        const button = getByTestId('button-container');
        expect(button.props.style.width).toBe('200%');
    });
});
