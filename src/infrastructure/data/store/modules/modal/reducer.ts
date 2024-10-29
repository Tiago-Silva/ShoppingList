import { ActionTypes, IModalShow, ListActions } from "./type";
import { Reducer } from "redux";
import { produce } from "immer";

const INITIAL_STATE: IModalShow = {
    isVisible: false,
    isRename: false,
};

export const modalReducer: Reducer<IModalShow, ListActions> = (state = INITIAL_STATE, actions) => {
    return produce(state, draft => {
        switch (actions.type) {
            case ActionTypes.SHOW_MODAL: {
                if (actions.payload.isVisible !== undefined) {
                    draft.isVisible = actions.payload.isVisible;
                }
                if (actions.payload.isRename !== undefined) {
                    draft.isRename = actions.payload.isRename;
                }
                break;
            }
            default:
                return draft;
        }
    });
};
