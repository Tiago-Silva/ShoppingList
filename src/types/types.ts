import {ItemData, ShoppingList} from "../interface/interface";


export type RootStackParamList = {
    List: {}; // {} parametros ou undefined
    Home: {};
    CheckItems: ShoppingList;
    AddItems: {name: string};
    // Adicione outras rotas aqui...
}

export type HeaderRouteParams = {
    name?: string;
    items?: ItemData[];
};
