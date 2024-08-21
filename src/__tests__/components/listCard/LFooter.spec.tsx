import React from "react";
import { render } from "@testing-library/react-native";
import { Providers } from "../../../providers/Providers";
import LFooter from "../../../components/ListCard/LFooter";
import { mockListItem } from "../../../__Mocks__/global/mocks";
import { useTheme } from "styled-components";

jest.mock('@react-native-async-storage/async-storage');
jest.mock('styled-components', () => ({
    ...jest.requireActual('styled-components'),
    useTheme: jest.fn(),
}));

const renderWithTheme = (component: React.ReactElement) => {
    return render(<Providers>{component}</Providers>);
};

describe('LFooter component', () => {
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
        const { getByTestId } = renderWithTheme(<LFooter items={mockListItem} />);
        const progressBar = getByTestId("progress-bar");

        expect(progressBar).toBeTruthy();
        expect(progressBar.props.progress).toBe(
            mockListItem.filter((item) => item.checked).length / mockListItem.length
        );
    });
});
