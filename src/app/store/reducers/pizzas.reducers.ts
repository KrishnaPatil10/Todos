
import * as fromPizzas from '../actions/pizzas.action';

import { Pizza } from "../models/pizza.model";

//import { InitialState } from "@ngrx/store/src/models";



export interface PizzaState {
    data: Pizza[];
    loaded: boolean;
    loading: boolean;
}


export const initialState: PizzaState = {
    data: [],
    loaded: false,
    loading: false
}


export function reducer(state = initialState, action: fromPizzas.LoadPizzaActions): PizzaState {
    switch(action.type){

        case fromPizzas.LOAD_PIZZA : {
            return {
                ...state,
                loading:true,
            }
        }
      
        case fromPizzas.LOAD_PIZZA_SUCCESS : {
            return {
                ...state,
                loading:false,
                loaded:true
            }
        }

        case fromPizzas.LOAD_PIZZA_FAIL : {
            return {
                ...state,
                loading:false,
                loaded : false
            }
        }
    }
    return state;
}