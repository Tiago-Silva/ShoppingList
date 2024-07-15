import { Reducer } from "redux";
import { produce } from 'immer';
import {ActionTypes, AddItemToListAction, ListActions, IListState, InputValue} from "./type";

const INITIAL_STATE: IListState = {
    items: [],
    inputValue: ''
}

export const cart: Reducer<IListState, ListActions> = (state = INITIAL_STATE, actions) => {
    return produce(state, draft => {
        switch (actions.type) {
            case ActionTypes.ADD_ITEM_TO_LIST: {
                const actionWithPayload = actions as AddItemToListAction;
                const { item } = actionWithPayload.payload;

                const itemInCartIndex = draft.items.findIndex(cartItem =>
                    cartItem.name === item.name
                );

                if (itemInCartIndex >= 0) {
                    draft.items[itemInCartIndex].quantity++;
                } else {
                    draft.items.push(item);
                }

                break;
            }
            case ActionTypes.REMOVE_ITEM_FROM_LIST: {
                const actionWithPayload = actions as AddItemToListAction;
                const { item } = actionWithPayload.payload;

                const itemInCartIndex = draft.items.findIndex(cartItem =>
                    cartItem.name === item.name
                );

                if (itemInCartIndex >= 0) {
                    draft.items.splice(itemInCartIndex, 1);
                }

                break;
            }
            case ActionTypes.REDUCE_ITEM_FROM_LIST: {
                const actionWithPayload = actions as AddItemToListAction;
                const { item } = actionWithPayload.payload;

                const itemInCartIndex = draft.items.findIndex(cartItem =>
                    cartItem.name === item.name
                );

                if (itemInCartIndex >= 0) {
                    draft.items[itemInCartIndex].quantity--;

                    if (draft.items[itemInCartIndex].quantity <= 0) {
                        draft.items.splice(itemInCartIndex, 1);
                        return;
                    }
                }

                break;
            }
            case ActionTypes.CLEAR_LIST: {
                draft.items = [];
                break;
            }
            case ActionTypes.INPUT_VALUE: {
                const actionWithPayload = actions as InputValue;
                draft.inputValue = actionWithPayload.payload.value;
                break;
            }
            default:
                return draft;
        }
    });
}
