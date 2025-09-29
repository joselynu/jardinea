export interface Producto {
  id: number;
  nombre: string;
  marca: string;
  imagen: string;          // ruta
  precio: number;          // precio actual
  precioLista?: number;    // precio anterior (tachado)
  unidad?: string;         // "x kg", "x lt", etc.
  badge?: string;          // "30% dcto.", "Nuevo", etc.
  congelado?: boolean;     // ejemplo de etiqueta
  stock?: number; 
}