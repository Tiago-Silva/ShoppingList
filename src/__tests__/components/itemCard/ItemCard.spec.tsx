import React from 'react';
import {render, fireEvent, act} from '@testing-library/react-native';
import ItemCard from '../../../presentation/components/itemCard';
import { ShoppingService } from '../../../infrastructure/data/service/shoppingService';
import { useAppDispatch } from '../../../infrastructure/data/store/modules/hooks';
import {Providers} from "../../../presentation/providers/Providers";
import {mockItem, mockShoppingService} from "../../../__Mocks__/global/mocks";

jest.mock('../../../infrastructure/data/service/shoppingService');
jest.mock('../../../infrastructure/data/store/modules/hooks');

const mockDispatch = jest.fn();
(useAppDispatch as jest.Mock).mockReturnValue(mockDispatch);

(ShoppingService as jest.Mock).mockImplementation(() => mockShoppingService);

jest.mock('@react-native-async-storage/async-storage');
const renderWithTheme = (component: React.ReactElement) => {
    return render(<Providers>{component}</Providers>);
};

describe('ItemCard Component', () => {
    it('renders correctly', () => {
        const { getByText } = renderWithTheme(<ItemCard name="Test Item" item={mockItem} />);
        act(() => {
            expect(getByText('Test Item')).toBeTruthy();
            expect(getByText('1')).toBeTruthy();
        });
    });

    it('calls updateItemCard when update button is pressed', async () => {
        const { getByTestId } = renderWithTheme(<ItemCard name="Test Item" item={mockItem} />);
        const iconButton = getByTestId('icon-button');

        await act(async () => {
            fireEvent.press(iconButton);
            expect(mockShoppingService.updateItem).toHaveBeenCalled();
        });
    });
});
