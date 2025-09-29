import { Component } from '@angular/core';
import { Producto } from '@app/interfaces/producto';

@Component({
  selector: 'app-artdecorativos',
  templateUrl: './artdecorativos.component.html',
  styleUrl: './artdecorativos.component.css'
})
export class ArtdecorativosComponent {
  productos: Producto[] = [
          { id:1, nombre:'Semillas de Pasto 250gr', marca:'Chepica Alemana',
            imagen:'assets/img/art_dec_mallas.jpg', precio:8590, precioLista:24490, unidad:'$1.142 x gr', badge:'22% dcto.' },
          { id:2, nombre:'Semilla Lavanda 2 gr', marca:'Vilmorín',
            imagen:'assets/img/art_dec_sombrilla.jpg', precio:2290, precioLista:3350, unidad:'$1.145 x gr' },
          { id:3, nombre:'Semillas de Girasol 3 gr', marca:'Ergo',
            imagen:'assets/img/art_dec_invernadero.jpg', precio:1900, precioLista:16440, unidad:'$663 x gr' },
          { id:4, nombre:'Semillas de Tomate Cocktail 1 gr', marca:'Anasac',
            imagen:'assets/img/art_dec_invernaderobig.jpg', precio:1900, precioLista:16440, unidad:'$663 x gr' },
          { id:5, nombre:'Semillas de Acelga 5 gr', marca:'Anasac',
            imagen:'assets/img/producto111.jpg', precio:1900, precioLista:16440, unidad:'$663 x gr' },
        ]
  

}
