import {ItemData} from "../interface/interface";


export type RootStackParamList = {
    List: {}; // {} parametros ou undefined
    Home: {};
    CheckItems: {};
    AddItems: {};
    // Adicione outras rotas aqui...
}

export type HeaderRouteParams = {
    name?: string;
    items?: ItemData[];
};
