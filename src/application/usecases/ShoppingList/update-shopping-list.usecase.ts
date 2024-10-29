import {Usecase} from "../usecase";
import {ShoppingList} from "../../../domain/entity/Shopping-List";
import {ShoppingListGateway} from "../../gateway/Shopping-List-gateway";


export class UpdateShoppingListUsecase implements Usecase<ShoppingList, ShoppingList> {

    private constructor(private readonly shoppingListGateway: ShoppingListGateway) {};

    public static create(shoppingListGateway: ShoppingListGateway) {
        return new UpdateShoppingListUsecase(shoppingListGateway);
    }

    public async exec(input: ShoppingList): Promise<ShoppingList> {
        return await this.shoppingListGateway.update(input);
    }

}
