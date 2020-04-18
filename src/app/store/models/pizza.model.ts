import { Toppings } from "./toppings.model";

export interface Pizza {
    id?: number;
    name?: string;  
    toppings?:Toppings[];
  }