import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import { Providers } from "../../../providers/Providers";
import { Input } from "../../../components/input";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components";

jest.mock('@react-native-async-storage/async-storage');
jest.mock('styled-components', () => ({
    ...jest.requireActual('styled-components'),
    useTheme: jest.fn(),
}));

const renderWithTheme = (component: React.ReactElement) => {
    return render(<Providers>{component}</Providers>);
};

describe('Input Component', () => {
    beforeEach(() => {
        (useTheme as jest.Mock).mockReturnValue({
            colors: {
                text_bar: '#000',
                gray_01: '#ccc',
                shape: '#fff',
            },
        });
    });

    it('renders correctly', () => {
        const { getByPlaceholderText } = renderWithTheme(<Input placeholder="Test" />);
        expect(getByPlaceholderText("Test")).toBeTruthy();
    });

    it('renders correctly with height', () => {
        const { getByTestId } = renderWithTheme(<Input placeholder="Test" height={50} />);
        const input = getByTestId('input');
        expect(input.props.style.height).toBe(RFPercentage(50));
    });

    it('renders correctly with width', () => {
        const { getByTestId } = renderWithTheme(<Input placeholder="Test" width={200} />);
        const input = getByTestId('input');
        expect(input.props.style.width).toBe(RFPercentage(200));
    });

    it('renders correctly with fontSize', () => {
        const { getByTestId } = renderWithTheme(<Input placeholder="Test" fontSize={20} />);
        const input = getByTestId('input');
        expect(input.props.style.fontSize).toBe(RFValue(20));
    });

    it('calls handleOnPress when pressed', () => {
        const handleOnPress = jest.fn();
        const { getByTestId } = renderWithTheme(<Input placeholder="Test" onPress={handleOnPress} />);
        fireEvent.press(getByTestId('input'));
        expect(handleOnPress).toHaveBeenCalled();
    });
});
