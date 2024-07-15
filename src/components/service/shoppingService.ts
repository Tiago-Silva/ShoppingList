import {ShoppingList} from "../../interface/interface";
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

    getAll: async () => {
        try {
            const shoppingList = await AsyncStorage.getItem('shoppingList');
            return shoppingList ? JSON.parse(shoppingList) : [];
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
