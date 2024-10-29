import {Usecase} from "../usecase";
import {ShoppingList} from "../../../domain/entity/Shopping-List";
import {ShoppingListGateway} from "../../gateway/Shopping-List-gateway";


export class GetAllShoppingListUsecase implements Usecase<void, ShoppingList[]> {

    private constructor(private readonly shoppingListGateway: ShoppingListGateway) {};

    public static create(shoppingListGateway: ShoppingListGateway) {
        return new GetAllShoppingListUsecase(shoppingListGateway);
    }

    exec(input: void): Promise<ShoppingList[]> {
        return this.shoppingListGateway.getAll();
    }
}
