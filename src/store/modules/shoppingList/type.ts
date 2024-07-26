import {ShoppingList} from "../../../interface/interface";

export enum ActionTypes {
    ADD_SHOPPING_LIST = 'ADD_SHOPPING_LIST',
    DELETE_SHOPPING_LIST = 'DELETE_SHOPPING_LIST',
    UPDATE_SHOPPING_LIST = 'UPDATE_SHOPPING_LIST',
    UPDATE_SHOPPING_LIST_NAME = 'UPDATE_SHOPPING_LIST_NAME',
    INPUT_VALUE= 'INPUT_VALUE',
    CLEAR_LIST = 'CLEAR_LIST',
    CLEAR_INPUT_VALUE = 'CLEAR_INPUT_VALUE'
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

export interface AddShoppingListAction extends Action {
    type: string;
    payload: {
        shoppingList: ShoppingList;
    };
}

export interface UpdateShoppingListNameAction extends Action {
    type: string;
    payload: {
        oldName: string;
        newName: string;
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

export type ListActions = AddShoppingListAction | ClearListAction | InputValue;
