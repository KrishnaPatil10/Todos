import { Action } from '@ngrx/store';
import { Pizza } from '../models/pizza.model';

export const LOAD_PIZZA = "[Products] Load Pizzas";
export const LOAD_PIZZA_SUCCESS = "[Products] Load Pizzas Success";
export const LOAD_PIZZA_FAIL = "[Products] Load Pizzas Fail";

export class LoadPizza implements Action {
    readonly type = LOAD_PIZZA;
}

export class LoadPizzaSucess implements Action {
    readonly type = LOAD_PIZZA_SUCCESS;
    constructor(public payload:Pizza[]){}
}

export class LoadPizzaFail implements Action {
    readonly type = LOAD_PIZZA_FAIL;
    constructor(public payload:any){}
}

export type LoadPizzaActions = LoadPizza | LoadPizzaSucess |  LoadPizzaFail;