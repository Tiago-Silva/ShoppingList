import { combineReducers } from "redux";
import { cart } from './shoppingList/reducer';
import {themeReducer} from "./theme/reducer";


export default combineReducers({
    cart,
    themeReducer
});
