import { Component } from '@angular/core';
import { Producto } from '@app/interfaces/producto';

@Component({
  selector: 'app-herrjardineria',
  templateUrl: './herrjardineria.component.html',
  styleUrl: './herrjardineria.component.css'
})
export class HerrjardineriaComponent {
  productos: Producto[] = [
        { id:1, nombre:'Semillas de Pasto 250gr', marca:'Chepica Alemana',
          imagen:'assets/img/pro_jardin.jpg', precio:8590, precioLista:24490, unidad:'$1.142 x gr', badge:'22% dcto.' },
        { id:2, nombre:'Semilla Lavanda 2 gr', marca:'Vilmorín',
          imagen:'assets/img/productos333.jpg', precio:2290, precioLista:3350, unidad:'$1.145 x gr' },
        { id:3, nombre:'Semillas de Girasol 3 gr', marca:'Ergo',
          imagen:'assets/img/pro_jardin_guantes.jpg', precio:1900, precioLista:16440, unidad:'$663 x gr' },
        { id:4, nombre:'Semillas de Tomate Cocktail 1 gr', marca:'Anasac',
          imagen:'assets/img/pro_jardin_palas.jpg', precio:1900, precioLista:16440, unidad:'$663 x gr' },
        { id:5, nombre:'Semillas de Acelga 5 gr', marca:'Anasac',
          imagen:'assets/img/pro_jardir_turbo.jpg', precio:1900, precioLista:16440, unidad:'$663 x gr' },
      ]

}
