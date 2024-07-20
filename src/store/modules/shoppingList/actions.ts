import {ItemData, ShoppingList} from "../../../interface/interface";
import {ActionTypes, AddItemToListAction, AddShoppingListAction, InputValue} from "./type";

export const addShoppingList = (list: ShoppingList): AddShoppingListAction => ({
    type: ActionTypes.ADD_SHOPPING_LIST,
    payload: { shoppingList: list }
});

export const updateShoppingList = (list: ShoppingList): AddShoppingListAction => ({
    type: ActionTypes.UPDATE_SHOPPING_LIST,
    payload: { shoppingList: list }
});

export function addItemToList (item: ItemData): AddItemToListAction {
    return {
        type: ActionTypes.ADD_ITEM_TO_LIST,
        payload: {
            item
        }
    }
}

export function removeItemFromList (item: ItemData): AddItemToListAction {
    return {
        type: ActionTypes.REMOVE_ITEM_FROM_LIST,
        payload: {
            item
        }
    }
}

export function reduceItemFromList (item: ItemData): AddItemToListAction {
    return {
        type: ActionTypes.REDUCE_ITEM_FROM_LIST,
        payload: {
            item
        }
    }
}

export function clearList () {
    return {
        type: ActionTypes.CLEAR_LIST,
    }
}

export function inputValue (value: string): InputValue {
    return {
        type: ActionTypes.INPUT_VALUE,
        payload: {
            value
        }
    }
}
