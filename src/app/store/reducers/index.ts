import { ActionReducerMap } from '@ngrx/store';

import * as fromPizzas from './pizzas.reducers';

export interface ProductsStates {
    pizzas: fromPizzas.PizzaState
}

export const reducers : ActionReducerMap<ProductsStates> = {
    pizzas: fromPizzas.reducer
}