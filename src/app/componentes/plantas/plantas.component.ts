import { Component } from '@angular/core';
import { Producto } from '@app/interfaces/producto';

@Component({
  selector: 'app-plantas',
  templateUrl: './plantas.component.html',
  styleUrl: './plantas.component.css'
})
export class PlantasComponent {
  productos: Producto[] = [
    { id:1, nombre:'Semillas de Pasto 250gr', marca:'Chepica Alemana',
      imagen:'assets/img/p_pino.jpg', precio:8590, precioLista:24490, unidad:'$1.142 x gr', badge:'22% dcto.' },
    { id:2, nombre:'Semilla Lavanda 2 gr', marca:'Vilmorín',
      imagen:'assets/img/p_enredadera.jpg', precio:2290, precioLista:3350, unidad:'$1.145 x gr' },
    { id:3, nombre:'Semillas de Girasol 3 gr', marca:'Ergo',
      imagen:'assets/img/s_girasol.jpg', precio:1900, precioLista:16440, unidad:'$663 x gr' },
    { id:4, nombre:'Semillas de Tomate Cocktail 1 gr', marca:'Anasac',
      imagen:'assets/img/s_tomate.jpg', precio:1900, precioLista:16440, unidad:'$663 x gr' },
    { id:5, nombre:'Semillas de Acelga 5 gr', marca:'Anasac',
      imagen:'assets/img/s_tomate.jpg', precio:1900, precioLista:16440, unidad:'$663 x gr' },
  ]

}
