import { Reducer } from "redux";
import { produce } from 'immer';
import {
    ActionTypes,
    ListActions,
    IListState,
    InputValue,
    AddShoppingListAction,
    UpdateShoppingListNameAction
} from "./type";

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

                draft.shoppingArrayList.push(shoppingList);

                const listIndex = draft.shoppingArrayList.findIndex(list =>
                    list.name === shoppingList.name
                );

                if (listIndex >= 0) {
                    draft.shoppingArrayList[listIndex].items.sort((a, b) => (b.checked ? 1 : 0) - (a.checked ? 1 : 0));
                }

                break;
            }
            case ActionTypes.DELETE_SHOPPING_LIST: {
                const actionWithPayload = actions as AddShoppingListAction;
                const { shoppingList } = actionWithPayload.payload;

                const listIndex = draft.shoppingArrayList.findIndex(list =>
                    list.name === shoppingList.name
                );

                if (listIndex >= 0) {
                    draft.shoppingArrayList.splice(listIndex, 1);
                }

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

                    draft.shoppingArrayList[listIndex].items.sort((a, b) => (b.checked ? 1 : 0) - (a.checked ? 1 : 0));
                }

                break;
            }

            case ActionTypes.UPDATE_SHOPPING_LIST_NAME: {
                const actionWithPayload = actions as UpdateShoppingListNameAction;
                const { oldName, newName } = actionWithPayload.payload;

                const listIndex = draft.shoppingArrayList.findIndex(list =>
                    list.name === oldName
                );

                if (listIndex >= 0) {
                    draft.shoppingArrayList[listIndex].name = newName;

                    draft.shoppingArrayList[listIndex].items.sort((a, b) => (b.checked ? 1 : 0) - (a.checked ? 1 : 0));
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
            case ActionTypes.CLEAR_INPUT_VALUE: {
                draft.inputValue = '';
                break;
            }
            default:
                return draft;
        }
    });
}
