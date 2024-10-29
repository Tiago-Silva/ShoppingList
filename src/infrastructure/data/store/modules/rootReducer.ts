import { combineReducers } from "redux";
import { cart } from './shoppingList/reducer';
import {themeReducer} from "./theme/reducer";
import {modalReducer} from "./modal/reducer";


export default combineReducers({
    cart,
    theme: themeReducer,
    modal: modalReducer
});
