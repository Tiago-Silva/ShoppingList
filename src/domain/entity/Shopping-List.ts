import {ItemProps} from "./Item";


export type ShoppingListProps = {
    name: string,
    items: ItemProps[]
}

export class ShoppingList {

    private constructor(private readonly props: ShoppingListProps) {
        this.validate();
    }

    private validate() {
        if (this.props.name == null || this.props.name.trim().length <= 0) {
            throw new Error('Props name invalid the ShoppingList');
        }
    }

    public static createWithProps(input: ShoppingListProps) {
        return new ShoppingList({
           name: input.name,
            items: input.items
        });
    }

    public get name() {
        return this.props.name;
    }

    public get items() {
        return this.props.items || [];
    }
}
