import {ThemeType} from "../store/modules/theme/type";


export interface ItemData {
    name: string;
    quantity: number;
    icon?: string;
    checked?: boolean;
    add?: boolean;
}

export interface ShoppingList {
    name: string;
    items: ItemData[];
}

export interface Sugestion {
    id: number;
    title: string;
}

export interface IStorageService {
    getItem(key: string): Promise<string | null>;
    setItem(key: string, value: string): Promise<void>;
}

export interface IThemeService {
    getTheme(): Promise<ThemeType>;
    setTheme(theme: ThemeType): Promise<void>;
    handleSelectTheme(onShowModal: () => void): (value: ThemeType) => void;
    getThemeFromRedux(): string;
}

export interface IHeaderService {
    handleInput: () => {
        changeValue: string | undefined;
        handleInputChanges: (value: string) => void;
    };
    handleSelectTheme: (onShowModal: () => void) => (value: ThemeType) => void;
    getThemeFromRedux: () => string;
}

export interface IShoppingService {
    save(list: ShoppingList): Promise<void>;
    delete(listName: string): Promise<void>;
    updateShoppingListName(oldName: string, newName: string): Promise<void>;
    addItem(listName: string, newItem: ItemData): Promise<void>;
    updateItem(listName: string, itemUpdate: ItemData): Promise<void>;
    updateItemName(listName: string, oldItem: ItemData, newItem: ItemData): Promise<void>;
    getAll(): Promise<ShoppingList[] | undefined>;
    getShoppingList(listName: string): Promise<ShoppingList | undefined>;
    deleteItemFromList(listName: string, itemName: string): Promise<void>;
    updateListInReducer(list: ShoppingList | undefined): void;
}
