import React from 'react';
import {render, fireEvent, act} from '@testing-library/react-native';
import ItemCard from '../../../components/itemCard';
import { ShoppingService } from '../../../service/shoppingService';
import { useAppDispatch } from '../../../store/modules/hooks';
import {Providers} from "../../../providers/Providers";
import {mockItem, mockShoppingService} from "../../../__Mocks__/global/mocks";

jest.mock('../../../service/shoppingService');
jest.mock('../../../store/modules/hooks');

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
