import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { CartItem } from '../interfaces/cart';
import { Producto } from '../interfaces/producto';

const STORAGE_KEY = 'mua_cart_v1';

@Injectable({ providedIn: 'root' })
export class CartService {
  private _items$ = new BehaviorSubject<CartItem[]>(this.load());
  items$ = this._items$.asObservable();

  /** total de unidades (para badge del navbar) */
  count$ = this.items$.pipe(
    map(items => items.reduce((acc, it) => acc + it.qty, 0))
  );

  /** lectura sincrónica */
  get items(): CartItem[] { return this._items$.getValue(); }

  add(product: Producto, qty = 1) {
    const items = [...this.items];
    const idx = items.findIndex(x => x.product.id === product.id);
    if (idx >= 0) {
      const max = product.stock ?? Infinity;
      items[idx] = { ...items[idx], qty: Math.min(items[idx].qty + qty, max) };
    } else {
      items.push({ product, qty: Math.max(1, qty) });
    }
    this.commit(items);
  }

  increase(productId: number) {
    const items = this.items.map(x => {
      if (x.product.id !== productId) return x;
      const max = x.product.stock ?? Infinity;
      return { ...x, qty: Math.min(x.qty + 1, max) };
    });
    this.commit(items);
  }

  decrease(productId: number) {
    const items = this.items.map(x =>
      x.product.id === productId ? { ...x, qty: Math.max(1, x.qty - 1) } : x
    );
    this.commit(items);
  }

  setQty(productId: number, qty: number) {
    const q = Math.max(1, Math.floor(qty || 1));
    const items = this.items.map(x =>
      x.product.id === productId ? { ...x, qty: q } : x
    );
    this.commit(items);
  }

  remove(productId: number) {
    this.commit(this.items.filter(x => x.product.id !== productId));
  }

  clear() { this.commit([]); }

  /** subtotal en CLP */
  get subtotal(): number {
    return this.items.reduce((acc, it) => acc + it.product.precio * it.qty, 0);
  }

  /** persistencia */
  private commit(items: CartItem[]) {
    this._items$.next(items);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }
  private load(): CartItem[] {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'); }
    catch { return []; }
  }
}