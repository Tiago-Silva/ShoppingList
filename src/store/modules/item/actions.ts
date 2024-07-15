import {ItemData} from "../../../interface/interface";
import {ActionTypes, AddItemToListAction} from "./type";


export function addItemToList (item: ItemData): AddItemToListAction {
    return {
        type: ActionTypes.ADD_ITEM_TO_LIST,
        payload: {
            item
        }
    }
}

export function removeItemFromCart (item: ItemData): AddItemToListAction {
    return {
        type: ActionTypes.REMOVE_ITEM_FROM_LIST,
        payload: {
            item
        }
    }
}

export function reduceItemFromCart (item: ItemData): AddItemToListAction {
    return {
        type: ActionTypes.REDUCE_ITEM_FROM_LIST,
        payload: {
            item
        }
    }
}

export function clearCart () {
    return {
        type: ActionTypes.CLEAR_LIST,
    }
}
