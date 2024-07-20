import {ItemData, ShoppingList} from "../../../interface/interface";

export enum ActionTypes {
    ADD_SHOPPING_LIST = 'ADD_SHOPPING_LIST',
    UPDATE_SHOPPING_LIST = 'UPDATE_SHOPPING_LIST',
    ADD_ITEM_TO_LIST = 'ADD_ITEM_TO_LIST',
    REMOVE_ITEM_FROM_LIST = 'REMOVE_ITEM_FROM_LIST',
    REDUCE_ITEM_FROM_LIST = 'REDUCE_ITEM_FROM_LIST',
    INPUT_VALUE= 'INPUT_VALUE',
    CLEAR_LIST = 'CLEAR_LIST'
}

export interface IState {
    cart: IListState;
}

export interface IListState {
    shoppingArrayList: ShoppingList[];
    inputValue?: string;
}

interface Action {
    type: string;
}

export interface AddItemToListAction extends Action {
    type: string;
    payload: {
        item: ItemData;
    };
}

export interface AddShoppingListAction extends Action {
    type: string;
    payload: {
        shoppingList: ShoppingList;
    };
}

export interface InputValue extends Action {
    type: string;
    payload: {
        value: string;
    };
}

export interface ClearListAction extends Action {
    type: string;
}

export type ListActions = AddShoppingListAction | AddItemToListAction | ClearListAction | InputValue;
