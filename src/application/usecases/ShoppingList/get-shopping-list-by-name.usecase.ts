import {Usecase} from "../usecase";
import {ShoppingList} from "../../../domain/entity/Shopping-List";
import {ShoppingListGateway} from "../../gateway/Shopping-List-gateway";


export class GetShoppingListByNameUsecase implements Usecase<string, ShoppingList> {

    private constructor(private readonly shoppingListGateway: ShoppingListGateway) {};

    public static create(shoppingListGateway: ShoppingListGateway) {
        return new GetShoppingListByNameUsecase(shoppingListGateway);
    }

    exec(input: string): Promise<ShoppingList> {
        return this.shoppingListGateway.getByName(input);
    }

}
