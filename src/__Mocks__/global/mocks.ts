import {ItemData} from "../../interface/interface";

export const mockShoppingService = {
    getShoppingList: jest.fn(),
    updateListInReducer: jest.fn(),
    updateItem: jest.fn(),
    deleteItemFromList: jest.fn(),
    updateItemName: jest.fn(),
    getIsModalVisible: jest.fn().mockReturnValue(true),
    getIsModalRename: jest.fn().mockReturnValue(true),
    setIsModalVisibleInReducer: jest.fn(),
};

export const mockItem: ItemData = {
    name: 'Test Item',
    quantity: 1,
    checked: false,
};

export const mockListItem: ItemData[] = [
    {
        name: 'Test Item',
        quantity: 1,
        checked: false,
    },
    {
        name: 'Test Item02',
        quantity: 1,
        checked: false,
    },
    {
        name: 'Test Item03',
        quantity: 1,
        checked: true,
    },
];

