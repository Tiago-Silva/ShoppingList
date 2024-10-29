import {Usecase} from "../usecase";
import {ShoppingListGateway} from "../../gateway/Shopping-List-gateway";

export type UpdateListNameInputDTO = {
    oldName: string,
    newName: string
}

export class UpdateListNameToShoppingUsecase implements Usecase<UpdateListNameInputDTO, void> {

    private constructor(private readonly shoppingListGateway: ShoppingListGateway) {};

    public static create(shoppingListGateway: ShoppingListGateway) {
        return new UpdateListNameToShoppingUsecase(shoppingListGateway);
    }

    public async exec(input: UpdateListNameInputDTO): Promise<void> {
        await this.shoppingListGateway.updateShoppingListName(input.oldName, input.newName);
    }
}
