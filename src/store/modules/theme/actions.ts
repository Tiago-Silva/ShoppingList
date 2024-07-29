import {ActionTypes, SetThemeAction, ThemeState} from "./type";


export const setTheme = (theme: ThemeState): SetThemeAction => ({
    type: ActionTypes.SET_THEME,
    payload: { theme: theme }
});
