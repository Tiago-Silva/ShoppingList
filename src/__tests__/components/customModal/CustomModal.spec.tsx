import React from 'react';
import { render, fireEvent, act, cleanup } from '@testing-library/react-native';
import CustomModal from '../../../components/customModal';
import { ThemeProvider } from 'styled-components/native';
import { darkTheme } from '../../../global/theme';

const renderWithTheme = (component: React.ReactElement) => {
    return render(<ThemeProvider theme={darkTheme}>{component}</ThemeProvider>);
};

describe('CustomModal Component', () => {
    beforeEach(() => {
        jest.useFakeTimers();
    });

    afterEach(() => {
        cleanup();
        jest.runOnlyPendingTimers();
        jest.useRealTimers();
    });

    it('renders correctly', () => {
        const { getByText } = renderWithTheme(<CustomModal isVisible={true} title="Modal Title" onClose={() => {}} />);
        expect(getByText('Modal Title')).toBeTruthy();
    });

    it('displays the correct title', () => {
        const { getByText } = renderWithTheme(<CustomModal isVisible={true} title="Modal Title" onClose={() => {}} />);
        expect(getByText('Modal Title')).toBeTruthy();
    });

    it('calls handleDelete when delete button is pressed', () => {
        const handleDelete = jest.fn();
        const { getByText } = renderWithTheme(<CustomModal isVisible={true} title="Modal Title" onClose={() => {}} handleDelete={handleDelete} />);
        act(() => {
            fireEvent.press(getByText('Excluir'));
            expect(handleDelete).toHaveBeenCalled();
        });
    });

    it('calls handleRename when rename button is pressed', () => {
        const handleRename = jest.fn();
        const { getByText } = renderWithTheme(<CustomModal isVisible={true} title="Modal Title" onClose={() => {}} handleRename={handleRename} />);
        act(() => {
            fireEvent.press(getByText('Renomear'));
            expect(handleRename).toHaveBeenCalled();
        });
    });

    it('calls handleSelectTheme when a theme is selected', () => {
        const handleSelectTheme = jest.fn();
        const { getByText } = renderWithTheme(<CustomModal isVisible={true} title="Modal Title" onClose={() => {}} handleSelectTheme={handleSelectTheme} isTheme={true} />);
        act(() => {
            fireEvent.press(getByText('Dark'));
            expect(handleSelectTheme).toHaveBeenCalledWith('dark');
        });
        act(() => {
            fireEvent.press(getByText('Light'));
            expect(handleSelectTheme).toHaveBeenCalledWith('light');
        });
    });
});
