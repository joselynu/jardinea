import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { SemillasComponent } from './semillas/semillas.component';
import { ListProductsComponent } from './componentes/listproducts/list-products.component';
import { AddEditProductComponent } from './componentes/add-edit-product/add-edit-product.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { MiusuarioComponent } from './componentes/miusuario/miusuario.component';
import { PlantasComponent } from './componentes/plantas/plantas.component';
import { ControlplagasComponent } from './componentes/controlplagas/controlplagas.component';
import { HerrjardineriaComponent } from './componentes/herrjardineria/herrjardineria.component';
import { ArtdecorativosComponent } from './componentes/artdecorativos/artdecorativos.component';
import { CarritoComponent } from './componentes/carrito/carrito.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    SemillasComponent,
    ListProductsComponent,
    AddEditProductComponent,
    NavbarComponent,
    UsuarioComponent,
    MiusuarioComponent,
    PlantasComponent,
    ControlplagasComponent,
    HerrjardineriaComponent,
    ArtdecorativosComponent,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
