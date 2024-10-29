import {ShoppingListGateway} from "../../../application/gateway/Shopping-List-gateway";
import { ShoppingList } from "../../../domain/entity/Shopping-List";
import {StorageService} from "../../data/service/storageService";
import {useAppDispatch} from "../../data/store/modules/hooks";
import {addShoppingList, updateShoppingList, updateShoppingListName} from "../../data/store/modules/shoppingList/actions";
import {find} from "styled-components/test-utils";
import findLastIndex from "@react-navigation/stack/lib/typescript/src/utils/findLastIndex";


export class ShoppingListRepositoryGateway implements ShoppingListGateway {

    constructor(
        private readonly storageService: StorageService,
        private readonly dispatch: ReturnType<typeof useAppDispatch>
    ) {
        this.storageService = storageService;
        this.dispatch = dispatch;
    }

    public static create(storageService: StorageService, dispatch: ReturnType<typeof useAppDispatch>) {
        return new ShoppingListRepositoryGateway(storageService,dispatch);
    }

    async updateShoppingListName(oldName: string, newName: string): Promise<void> {
        let listArray: ShoppingList[] = await this.getAll();

        const listIndex = listArray.findIndex(list => list.name === oldName);

        if (listIndex !== -1) {
            listArray[listIndex] = ShoppingList.createWithProps({
                name: newName,
                items: listArray[listIndex].items
            });
            await this.storageService.setItem('shoppingList', JSON.stringify(listArray));
            this.dispatch(updateShoppingListName(oldName, newName));
        }
    }

    async getAll(): Promise<ShoppingList[]> {
        try {
            const shoppingList = await this.storageService.getItem('shoppingList');
            return shoppingList ? JSON.parse(shoppingList) : [];
        } catch (e) {
            console.log('Error get all shoppingList by storage: ', e);
            throw new Error('Error get all shoppingList by storage: ' + e);
        }
    }

    async save(object: ShoppingList): Promise<void> {
        let listArray: ShoppingList[] = await this.getAll();

        const existingList = listArray.find(list => list.name === object.name);

        if (existingList) {
            throw new Error('List already exists');
        }

        listArray.push(object);
        await this.storageService.setItem('shoppingList', JSON.stringify(listArray));
        this.dispatch(addShoppingList(object));
    }

    async update(object: ShoppingList): Promise<void> {
        let listArray: ShoppingList[] = await this.getAll();

        const listIndex = listArray.findIndex(list => list.name === object.name);

        if (listIndex !== -1) {
            listArray[listIndex] = object;
            await this.storageService.setItem('shoppingList', JSON.stringify(listArray));
            this.dispatch(updateShoppingList(object));
        }
    }

    async delete(object: ShoppingList): Promise<void> {
        let listArray: ShoppingList[] = await this.getAll();

        listArray = listArray.filter((item: ShoppingList) => item.name !== object.name);
        await this.storageService.setItem('shoppingList', JSON.stringify(listArray));
    }

    async getByName(name: string): Promise<ShoppingList> {
        let listArray: ShoppingList[] = await this.getAll();

        const foundList = listArray.find(value => value.name === name);
        if (!foundList) {
            throw new Error(`Shopping list with name ${name} not found`);
        }
        return foundList;
    }
}
