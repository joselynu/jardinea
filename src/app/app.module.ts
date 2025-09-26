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

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    SemillasComponent,
    ListProductsComponent,
    AddEditProductComponent,
    NavbarComponent,
    UsuarioComponent,
    MiusuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
