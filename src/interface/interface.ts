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

export interface IStorageService {
    getItem(key: string): Promise<string | null>;
    setItem(key: string, value: string): Promise<void>;
}
