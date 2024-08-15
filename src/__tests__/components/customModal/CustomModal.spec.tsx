import React from 'react';
import { render, fireEvent, act, cleanup } from '@testing-library/react-native';
import { CustomModal } from '../../../components/customModal';
import {Providers} from "../../../providers/Providers";

jest.mock('@react-native-async-storage/async-storage');
const renderWithTheme = (component: React.ReactElement) => {
    return render(<Providers>{component}</Providers>);
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

    it('renders correctly theme', () => {
        const { getByText } = renderWithTheme(
            <CustomModal.Root isVisible={true} onClose={() => {}}>
                <CustomModal.Theme title="Modal theme" />
            </CustomModal.Root>
        );
        expect(getByText('Modal theme')).toBeTruthy();
    });

    it('renders correctly rename', () => {
        const { getByText } = renderWithTheme(
            <CustomModal.Root isVisible={true} onClose={() => {}}>
                <CustomModal.Rename title="Modal rename" />
            </CustomModal.Root>
        );
        expect(getByText('Modal rename')).toBeTruthy();
    });

    it('calls handleDelete when delete button is pressed', () => {
        const handleDelete = jest.fn();
        const { getByText } = renderWithTheme(
            <CustomModal.Root isVisible={true} onClose={() => {}}>
                <CustomModal.Rename title="Modal Title" onDelete={handleDelete} />
            </CustomModal.Root>
        );
        act(() => {
            fireEvent.press(getByText('Excluir'));
            expect(handleDelete).toHaveBeenCalled();
        });
    });

    it('calls handleRename when rename button is pressed', () => {
        const handleRename = jest.fn();
        const { getByText } = renderWithTheme(
            <CustomModal.Root isVisible={true} onClose={() => {}}>
                <CustomModal.Rename title="Modal Title" onRename={handleRename} />
            </CustomModal.Root>
        );
        act(() => {
            fireEvent.press(getByText('Renomear'));
            expect(handleRename).toHaveBeenCalled();
        });
    });

    it('calls handleSelectTheme when a theme is selected', () => {
        const handleSelectTheme = jest.fn();
        const { getByText } = renderWithTheme(
            <CustomModal.Root isVisible={true} onClose={() => {}}>
                <CustomModal.Theme title="Modal Title" onSelectTheme={handleSelectTheme} />
            </CustomModal.Root>
        );
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
