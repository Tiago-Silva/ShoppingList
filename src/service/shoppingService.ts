import {IShoppingService, IStorageService, ItemData, ShoppingList} from "../interface/interface";
import {useAppDispatch} from "../store/modules/hooks";
import {updateShoppingList} from "../store/modules/shoppingList/actions";


export class ShoppingService implements IShoppingService {
    private storageService: IStorageService;
    private dispatch: ReturnType<typeof useAppDispatch>;

    constructor(storageService: IStorageService, dispatch: ReturnType<typeof useAppDispatch>) {
        this.storageService = storageService;
        this.dispatch = dispatch;
    }

    async save (list: ShoppingList): Promise<void> {
        try {
            const shoppingList = await this.storageService.getItem('shoppingList');
            let listsArray = shoppingList ? JSON.parse(shoppingList) : [];
            listsArray.push(list);
            await this.storageService.setItem('shoppingList', JSON.stringify(listsArray));
        } catch (error) {
            console.error('Erro ao salvar a lista no AsyncStorage', error);
        }
    }

    async delete (listName: string): Promise<void> {
        try {
            const shoppingList = await this.storageService.getItem('shoppingList');
            let listsArray = shoppingList ? JSON.parse(shoppingList) : [];
            listsArray = listsArray.filter((item: ShoppingList) => item.name !== listName);
            await this.storageService.setItem('shoppingList', JSON.stringify(listsArray));
        } catch (error) {
            console.error('Erro ao deletar a lista no AsyncStorage', error);
        }
    }

    async updateShoppingListName (oldName: string, newName: string): Promise<void> {
        try {
            const shoppingList = await this.storageService.getItem('shoppingList');
            let listsArray: ShoppingList[] = shoppingList ? JSON.parse(shoppingList) : [];

            const listIndex = listsArray.findIndex(list => list.name === oldName);

            if (listIndex !== -1) {
                listsArray[listIndex].name = newName;
                await this.storageService.setItem('shoppingList', JSON.stringify(listsArray));
            } else {
                console.error('Lista não encontrada');
            }
        } catch (error) {
            console.error('Erro ao salvar a lista no AsyncStorage', error);
        }
    }

    async addItem (listName: string, newItem: ItemData): Promise<void> {
        try {
            const shoppingList = await this.storageService.getItem('shoppingList');
            let listsArray: ShoppingList[] = shoppingList ? JSON.parse(shoppingList) : [];

            const listIndex = listsArray.findIndex(list => list.name === listName);

            if (listIndex !== -1) {
                listsArray[listIndex].items.push(newItem);

                await this.storageService.setItem('shoppingList', JSON.stringify(listsArray));
            } else {
                console.error('Lista não encontrada');
            }
        } catch (error) {
            console.error('Erro ao atualizar a lista no AsyncStorage', error);
        }
    }

    async updateItem (listName: string, itemUpdate: ItemData): Promise<void> {
        try {
            const shoppingList = await this.storageService.getItem('shoppingList');
            let listsArray: ShoppingList[] = shoppingList ? JSON.parse(shoppingList) : [];

            const listIndex = listsArray.findIndex(list => list.name === listName);

            if (listIndex !== -1) {
                listsArray[listIndex] = {
                    ...listsArray[listIndex],
                    items: listsArray[listIndex].items.map(item => item.name === itemUpdate.name ? itemUpdate : item)
                };
                await this.storageService.setItem('shoppingList', JSON.stringify(listsArray));
            } else {
                console.error('Lista não encontrada');
            }
        } catch (error) {
            console.error('Erro ao atualizar a lista no AsyncStorage', error);
        }
    }

   async updateItemName (listName: string, oldItem: ItemData, newItem: ItemData): Promise<void> {
        try {
            const shoppingList = await this.storageService.getItem('shoppingList');
            let listsArray: ShoppingList[] = shoppingList ? JSON.parse(shoppingList) : [];

            const listIndex = listsArray.findIndex(list => list.name === listName);

            if (listIndex !== -1) {
                listsArray[listIndex] = {
                    ...listsArray[listIndex],
                    items: listsArray[listIndex].items.map(item => item.name === oldItem.name ? newItem : item)
                };
                await this.storageService.setItem('shoppingList', JSON.stringify(listsArray));
            } else {
                console.error('Lista não encontrada');
            }
        } catch (error) {
            console.error('Erro ao atualizar a lista no AsyncStorage', error);
        }
    }

    async getAll (): Promise<ShoppingList[] | undefined> {
        try {
            const shoppingList = await this.storageService.getItem('shoppingList');
            return shoppingList ? JSON.parse(shoppingList) : [];
        } catch (error) {
            console.error('Erro ao buscar a lista no AsyncStorage', error);
        }
    }

    async getShoppingList (listName: string): Promise<ShoppingList | undefined> {
        try {
            const shoppingList = await this.storageService.getItem('shoppingList');
            let listsArray = shoppingList ? JSON.parse(shoppingList) : [];

            return listsArray.find((item: ShoppingList) => item.name === listName);
        } catch (error) {
            console.error('Erro ao buscar a lista no AsyncStorage', error);
        }
    }

    async deleteItemFromList (listName: string, itemName: string): Promise<void> {
        try {
            const shoppingList = await this.storageService.getItem('shoppingList');
            let listsArray: ShoppingList[] = shoppingList ? JSON.parse(shoppingList) : [];

            const listIndex = listsArray.findIndex((list: ShoppingList) => list.name === listName);

            if (listIndex !== -1) {
                listsArray[listIndex].items = listsArray[listIndex].items.filter((item: ItemData) => item.name !== itemName);
                await this.storageService.setItem('shoppingList', JSON.stringify(listsArray));
            } else {
                console.error('Lista não encontrada');
            }
        } catch (error) {
            console.error('Erro ao deletar o item da lista no AsyncStorage', error);
        }
    }

    updateListInReducer(list: ShoppingList | undefined): void {
        if (list) {
            this.dispatch(updateShoppingList(list));
        }
    }
}
