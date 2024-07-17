import {ItemData} from "../../../interface/interface";

export enum ActionTypes {
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
    items: ItemData[];
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

export interface InputValue extends Action {
    type: string;
    payload: {
        value: string;
    };
}

export interface ClearListAction extends Action {
    type: string;
}

export type ListActions = AddItemToListAction | ClearListAction | InputValue;
