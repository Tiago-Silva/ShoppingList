import React from 'react';
import { render, fireEvent, act } from '@testing-library/react-native';
import AddItems from '../../../presentation/screens/addItems';
import { ShoppingService } from '../../../infrastructure/data/service/shoppingService';
import { useAppDispatch } from '../../../infrastructure/data/store/modules/hooks';
import { Providers } from "../../../presentation/providers/Providers";
import { mockShoppingService } from "../../../__Mocks__/global/mocks";

jest.mock('../../../infrastructure/data/service/shoppingService');
jest.mock('../../../infrastructure/data/store/modules/hooks');
jest.mock('@react-navigation/native', () => ({
    useRoute: () => ({
        params: { name: 'Test List' }
    })
}));

const mockDispatch = jest.fn();
(useAppDispatch as jest.Mock).mockReturnValue(mockDispatch);

(ShoppingService as jest.Mock).mockImplementation(() => mockShoppingService);

const renderWithTheme = (component: React.ReactElement) => {
    return render(<Providers>{component}</Providers>);
};

describe('AddItems Screen', () => {

    it('calls handleAddItem when the add button is pressed', async () => {
        const { getByTestId } = renderWithTheme(<AddItems />);
        const addButton = getByTestId('add-button');

        await act(async () => {
            fireEvent.press(addButton);
        });

        expect(mockShoppingService.addItem).toHaveBeenCalled();
    });

    it('adds item to the list and clears input value', async () => {
        const { getByTestId } = renderWithTheme(<AddItems />);
        const addButton = getByTestId('add-button');

        await act(async () => {
            fireEvent.press(addButton);
        });

        expect(mockShoppingService.addItem).toHaveBeenCalledWith('Test List', {
            name: 'New Item',
            quantity: 1,
            icon: '',
            checked: false
        });
        expect(mockShoppingService.clearInputValue).toHaveBeenCalled();
    });
});
