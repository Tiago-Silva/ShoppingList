import {ShoppingList} from "../interface/interface";


export type RootStackParamList = {
    List: {}; // {} parametros ou undefined
    Home: {};
    CheckItems: ShoppingList;
    AddItems: {name: string};
}

export type HeaderRouteParams = {
    name?: string;
};
