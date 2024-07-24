

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
