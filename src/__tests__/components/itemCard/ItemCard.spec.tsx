import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ItemCard from '../../../components/itemCard';
import { ShoppingService } from '../../../service/shoppingService';
import { useAppDispatch } from '../../../store/modules/hooks';
import { ItemData } from '../../../interface/interface';
import {Providers} from "../../../providers/Providers";

jest.mock('../../../service/shoppingService');
jest.mock('../../../store/modules/hooks');

const mockDispatch = jest.fn();
(useAppDispatch as jest.Mock).mockReturnValue(mockDispatch);

const mockItem: ItemData = {
    name: 'Test Item',
    quantity: 1,
    checked: false,
};

const mockShoppingService = {
    getShoppingList: jest.fn(),
    updateListInReducer: jest.fn(),
    updateItem: jest.fn(),
    deleteItemFromList: jest.fn(),
    updateItemName: jest.fn(),
};

(ShoppingService as jest.Mock).mockImplementation(() => mockShoppingService);

jest.mock('@react-native-async-storage/async-storage');
const renderWithTheme = (component: React.ReactElement) => {
    return render(<Providers>{component}</Providers>);
};

describe('ItemCard Component', () => {
    it('renders correctly', () => {
        const { getByText } = renderWithTheme(<ItemCard name="Test Item" item={mockItem} />);
        expect(getByText('Test Item')).toBeTruthy();
        expect(getByText('1')).toBeTruthy();
    });

    it('handles item update correctly', async () => {
        const { getByTestId } = renderWithTheme(<ItemCard name="Test Item" item={mockItem} />);
        const iconButton = getByTestId('icon-button');
        fireEvent.press(iconButton);
        expect(mockShoppingService.updateItem).toHaveBeenCalledWith('Test Item', { ...mockItem, checked: true });
    });
});
