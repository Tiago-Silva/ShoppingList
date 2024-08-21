export enum ActionTypes {
    SHOW_MODAL = 'SHOW_MODAL',
}

export interface IModalShow {
    isVisible: boolean;
    isRename: boolean;
}

interface Action {
    type: string;
}

export interface ShowModalAction extends Action {
    type: string;
    payload: {
        isVisible?: boolean;
        isRename?: boolean;
    };
}

export type ListActions = ShowModalAction;
