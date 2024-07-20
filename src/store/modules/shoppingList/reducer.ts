import { Reducer } from "redux";
import { produce } from 'immer';
import {ActionTypes, AddItemToListAction, ListActions, IListState, InputValue, AddShoppingListAction} from "./type";

const INITIAL_STATE: IListState = {
    shoppingArrayList: [],
    inputValue: ''
}

export const cart: Reducer<IListState, ListActions> = (state = INITIAL_STATE, actions) => {
    return produce(state, draft => {
        switch (actions.type) {
            case ActionTypes.ADD_SHOPPING_LIST: {
                const actionWithPayload = actions as AddShoppingListAction;
                const { shoppingList } = actionWithPayload.payload;

                const listIndex = draft.shoppingArrayList.findIndex(list =>
                    list.name === shoppingList.name
                );

                draft.shoppingArrayList.push(shoppingList);

                break;
            }
            case ActionTypes.UPDATE_SHOPPING_LIST: {
                const actionWithPayload = actions as AddShoppingListAction;
                const { shoppingList } = actionWithPayload.payload;

                const listIndex = draft.shoppingArrayList.findIndex(list =>
                    list.name === shoppingList.name
                );

                if (listIndex >= 0) {
                    draft.shoppingArrayList[listIndex] = shoppingList;
                }

                break;
            }
            case ActionTypes.CLEAR_LIST: {
                draft.shoppingArrayList = [];
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
