import { Producto } from "./producto";

export interface CartItem {
  product: Producto;
  qty: number;
}