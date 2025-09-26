import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SemillasComponent } from './semillas/semillas.component';
import { InicioComponent } from './inicio/inicio.component';
import { ListProductsComponent } from './componentes/listproducts/list-products.component';
import { AddEditProductComponent } from './componentes/add-edit-product/add-edit-product.component';
import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { MiusuarioComponent } from './componentes/miusuario/miusuario.component';


const routes: Routes = [
  {path: '', redirectTo: '/inicio', pathMatch: 'full'},
  {path: 'inicio', component: InicioComponent},
  {path: 'semillas', component: SemillasComponent},
  { path: 'productos', component: ListProductsComponent },
  { path: '', component: ListProductsComponent },
  { path: 'add', component: AddEditProductComponent },
  { path: 'crearusuario', component: UsuarioComponent},
  { path: 'verusuario', component: MiusuarioComponent},
  { path: '**', redirectTo: '' , pathMatch: 'full' },
  
  // 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
