import {Usecase} from "../usecase";
import {ShoppingList} from "../../../domain/entity/Shopping-List";
import {ShoppingListGateway} from "../../gateway/Shopping-List-gateway";


export class CreateShoppingListUsecase implements Usecase<ShoppingList, ShoppingList> {

    private constructor(private readonly shoppingListGateway: ShoppingListGateway) {};

    public static create(shoppingListGateway: ShoppingListGateway) {
        return new CreateShoppingListUsecase(shoppingListGateway);
    }

    public async exec(input: ShoppingList): Promise<ShoppingList> {
        await this.shoppingListGateway.save(input);
        return input;
    }
}
