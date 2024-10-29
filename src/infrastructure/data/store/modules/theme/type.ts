

export enum ActionTypes {
    SET_THEME = 'SET_THEME',
}

export type ThemeType = 'dark' | 'light';

export interface ThemeState {
    currentTheme: ThemeType;
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
