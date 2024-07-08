

export interface Item {
    name: string
    quantity: number
}

export interface ShoppingList {
    name: string;
    items: Item[];
}

export interface Sugestion {
    id: number;
    title: string;
}
