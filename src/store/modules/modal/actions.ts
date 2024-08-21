import { ActionTypes, ShowModalAction } from "./type";

export const showModal = (isVisible?: boolean, isRename?: boolean): ShowModalAction => ({
    type: ActionTypes.SHOW_MODAL,
    payload: {
        isVisible,
        isRename,
    }
});
