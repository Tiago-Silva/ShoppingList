import {ItemData} from "../../../interface/interface";
import {ActionTypes, AddItemToListAction, InputValue} from "./type";


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
