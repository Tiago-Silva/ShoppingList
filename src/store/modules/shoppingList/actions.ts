import {ShoppingList} from "../../../interface/interface";
import {ActionTypes, AddShoppingListAction, InputValue} from "./type";

export const addShoppingList = (list: ShoppingList): AddShoppingListAction => ({
    type: ActionTypes.ADD_SHOPPING_LIST,
    payload: { shoppingList: list }
});

export const deleteShoppingList = (list: ShoppingList): AddShoppingListAction => ({
    type: ActionTypes.DELETE_SHOPPING_LIST,
    payload: { shoppingList: list }
});

export const updateShoppingList = (list: ShoppingList): AddShoppingListAction => ({
    type: ActionTypes.UPDATE_SHOPPING_LIST,
    payload: { shoppingList: list }
});

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

export function clearInputValue () {
    return {
        type: ActionTypes.CLEAR_INPUT_VALUE
    }
}
