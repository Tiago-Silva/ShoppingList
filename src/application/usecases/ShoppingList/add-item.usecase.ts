import {Usecase} from "../usecase";
import {ShoppingList} from "../../../domain/entity/Shopping-List";
import {Item} from "../../../domain/entity/Item";
import {ShoppingListGateway} from "../../gateway/Shopping-List-gateway";
import {updateShoppingList} from "../../../infrastructure/data/store/modules/shoppingList/actions";

export type InputAddItem = {
    listName: string,
    item: Item
}

export class AddItemUsecase implements Usecase<InputAddItem, ShoppingList> {


    private constructor(private readonly shoppingListGateway: ShoppingListGateway) {}

    public static create(shoppingListGateway: ShoppingListGateway) {
        return new AddItemUsecase(shoppingListGateway);
    }

    public async exec(input: InputAddItem): Promise<ShoppingList> {
        try {
            let shoppingList: ShoppingList = await this.shoppingListGateway.getByName(input.listName);

            const existingItem = shoppingList.items.find(value => value.name === input.item.name);

            if (existingItem) {
                throw new Error('item already exists');
            }

            shoppingList.items.push(input.item);

            await this.shoppingListGateway.update(shoppingList);
            return shoppingList;
        } catch (e) {
            console.log("Error adding new item");
            throw new Error("Error adding new item: " + e);
        }
    }

}
