import {Item} from "../interface/interface";


export type RootStackParamList = {
    List: {}; // {} parametros ou undefined
    Home: {};
    Items: {};
    // Adicione outras rotas aqui...
}

export type HeaderRouteParams = {
    name?: string;
    items?: Item[];
};
