import {Item} from "../../domain/entity/Item";
import {Gateway} from "./gateway";


export interface ItemGateway extends Gateway<Item> {}
