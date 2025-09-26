import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {Usuario} from './interfaces/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor (public router: Router) {}
 

  esInicio(): boolean {
    return this.router.url === '/';
  }
}
