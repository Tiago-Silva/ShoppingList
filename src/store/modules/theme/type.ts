

export enum ActionTypes {
    SET_THEME = 'SET_THEME',
}

export interface ThemeState {
    currentTheme: 'dark' | 'light';
}

interface Action {
    type: string;
}

export interface SetThemeAction extends Action {
    type: string;
    payload: {
        theme: ThemeState;
    };
}

export type ListActions = SetThemeAction;
