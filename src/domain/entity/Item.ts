
export type ItemProps = {
    name: string;
    quantity: number;
    icon: string;
    checked: boolean;
    add: boolean;
}

export class Item {

    private constructor(private readonly props: ItemProps) {
        this.validate();
    }

    public static createWithProps(item: ItemProps) {
        return new Item({
           name: item.name,
           quantity: item.quantity,
            icon: item.icon,
            checked: item.checked,
            add: item.add
        });
    }

    private validate() {
        if (this.props.name == null || this.props.name.trim().length <= 0) {
            throw new Error('Props name invalid');
        }

        if (this.props.quantity <= 0) {
            throw new Error('Props quantity invalid');
        }
    }

    public get name() {
        return this.props.name;
    }

    public get quantity() {
        return this.props.quantity;
    }

    public get icon() {
        return this.props.icon;
    }

    public get checked() {
        return this.props.checked || false;
    }

    public get add() {
        return this.props.add || false;
    }
}
