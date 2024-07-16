import {ItemData, ShoppingList} from "../interface/interface";
import AsyncStorage from "@react-native-async-storage/async-storage";


export const ShoppingService = {

    save: async (list: ShoppingList) => {
        try {
            const shoppingList = await AsyncStorage.getItem('shoppingList');
            let listsArray = shoppingList ? JSON.parse(shoppingList) : [];
            listsArray.push(list);
            await AsyncStorage.setItem('shoppingList', JSON.stringify(listsArray));
        } catch (error) {
            console.error('Erro ao salvar a lista no AsyncStorage', error);
        }
    },

    update: async (listName: string, newItem: ItemData) => {
        try {
            const shoppingList = await AsyncStorage.getItem('shoppingList');
            let listsArray: ShoppingList[] = shoppingList ? JSON.parse(shoppingList) : [];

            const listIndex = listsArray.findIndex(list => list.name === listName);

            if (listIndex !== -1) {
                listsArray[listIndex].items.push(newItem);

                await AsyncStorage.setItem('shoppingList', JSON.stringify(listsArray));
            } else {
                console.error('Lista não encontrada');
            }
        } catch (error) {
            console.error('Erro ao atualizar a lista no AsyncStorage', error);
        }
    },

    getAll: async () => {
        try {
            const shoppingList = await AsyncStorage.getItem('shoppingList');
            return shoppingList ? JSON.parse(shoppingList) : [];
        } catch (error) {
            console.error('Erro ao buscar a lista no AsyncStorage', error);
        }
    },

    getShoppingList: async (name: string) => {
        try {
            const shoppingList = await AsyncStorage.getItem('shoppingList');
            let listsArray = shoppingList ? JSON.parse(shoppingList) : [];

            return listsArray.find((item: ShoppingList) => item.name === name);
        } catch (error) {
            console.error('Erro ao buscar a lista no AsyncStorage', error);
        }
    },

    delete: async (list: ShoppingList) => {
        try {
            const shoppingList = await AsyncStorage.getItem('shoppingList');
            let listsArray = shoppingList ? JSON.parse(shoppingList) : [];
            listsArray = listsArray.filter((item: ShoppingList) => item.name !== list.name);
            await AsyncStorage.setItem('shoppingList', JSON.stringify(listsArray));
        } catch (error) {
            console.error('Erro ao deletar a lista no AsyncStorage', error);
        }
    }
}
