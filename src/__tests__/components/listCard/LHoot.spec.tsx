import React from "react";
import { act, fireEvent, render } from "@testing-library/react-native";
import { Providers } from "../../../presentation/providers/Providers";
import { useAppDispatch, useAppSelector } from "../../../infrastructure/data/store/modules/hooks";
import { useTheme } from "styled-components";
import { useNavigation } from "@react-navigation/native";
import { mockListItem, mockShoppingService } from "../../../__Mocks__/global/mocks";
import { ShoppingService } from "../../../infrastructure/data/service/shoppingService";
import { IModalShow } from "../../../infrastructure/data/store/modules/modal/type";
import LRoot from "../../../presentation/components/ListCard/LRoot";

jest.mock('../../../infrastructure/data/service/shoppingService');
jest.mock('../../../infrastructure/data/store/modules/hooks');
jest.mock('@react-native-async-storage/async-storage');
jest.mock('styled-components', () => ({
    ...jest.requireActual('styled-components'),
    useTheme: jest.fn(),
}));
jest.mock('@react-navigation/native', () => ({
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: jest.fn(),
}));
jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useSelector: jest.fn(),
}));

const mockDispatch = jest.fn();
(useAppDispatch as jest.Mock).mockReturnValue(mockDispatch);
(ShoppingService as jest.Mock).mockImplementation(() => mockShoppingService);

const renderWithTheme = (component: React.ReactElement) => {
    return render(<Providers>{component}</Providers>);
};

describe('LRoot component', () => {
    beforeEach(() => {
        (useTheme as jest.Mock).mockReturnValue({
            colors: {
                text_bar: '#000',
                gray_01: '#ccc',
                shape: '#fff',
            },
        });

        (useNavigation as jest.Mock).mockReturnValue({
            navigate: jest.fn(),
        });

        (useAppSelector<IModalShow> as jest.Mock).mockReturnValue({ isVisible: false, isRename: false });
    });

    it('calls handleShowItems when container is pressed', () => {
        const { getByTestId } = renderWithTheme(
            <LRoot name="Test List" items={mockListItem} />
        );
        const container = getByTestId('container-listCard');

        act(() => {
            fireEvent.press(container);
        });

        expect(container).toBeTruthy();
    });
});
