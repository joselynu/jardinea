import { Component } from '@angular/core';
import { AfterViewInit, ElementRef, ViewChild } from '@angular/core';
declare const bootstrap: any;

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent implements AfterViewInit{
    @ViewChild('homeCarousel') homeCarousel!: ElementRef;

    ngAfterViewInit(): void {
    // Fuerza autoplay, sin pausa al pasar el mouse y con loop
    new bootstrap.Carousel(this.homeCarousel.nativeElement, {
      interval: 2000,
      ride: 'carousel',
      pause: false,    // <- NO pausar en hover
      wrap: true,
      touch: true
    });
    }

}
