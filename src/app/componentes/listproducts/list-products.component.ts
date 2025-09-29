import { Component, OnInit } from '@angular/core';
import { Producto } from '@app/interfaces/producto';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css'
})
export class ListProductsComponent implements OnInit {
 listProducts: Producto[] = [
    //{name: 'Macetero', descripcion: 'Rojo ladrillo mediano', precio: 5000, stock: 200 },
    //{name: 'Palmera', descripcion: 'Palmera Mediana', precio: 50000, stock: 30 },
  ]
  constructor() {}
  ngOnInit(): void {

  }
}
