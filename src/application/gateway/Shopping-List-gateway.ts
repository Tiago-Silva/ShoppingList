import {ShoppingList} from "../../domain/entity/Shopping-List";
import {Gateway} from "./gateway";


export interface ShoppingListGateway extends Gateway<ShoppingList> {
    updateShoppingListName(oldName: string, newName: string): Promise<void>;
    getAll(): Promise<ShoppingList[]>;
}
