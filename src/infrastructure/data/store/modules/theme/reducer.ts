import {Reducer} from "redux";
import {ActionTypes, ListActions, SetThemeAction, ThemeState} from "./type";
import {produce} from "immer";


const INITIAL_STATE: ThemeState = {
    currentTheme: 'dark'
}

export const themeReducer: Reducer<ThemeState, ListActions> = (state = INITIAL_STATE, action) => {
    return produce(state, draft => {
        switch (action.type) {
            case ActionTypes.SET_THEME: {
                const actionWithPayload = action as SetThemeAction;
                const {theme} = actionWithPayload.payload;

                draft.currentTheme = theme.currentTheme;

                break;
            }
            default:
                return draft;
        }
    });
}
