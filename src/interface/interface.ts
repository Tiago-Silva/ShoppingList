

export interface Item {
    name: string;
    quantity: number;
    icon?: string;
    checked?: boolean;
}

export interface ShoppingList {
    name: string;
    items: Item[];
}

export interface Sugestion {
    id: number;
    title: string;
}
