import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SemillasComponent } from './semillas/semillas.component';
import { InicioComponent } from './inicio/inicio.component';
import { ListProductsComponent } from './componentes/listproducts/list-products.component';
import { AddEditProductComponent } from './componentes/add-edit-product/add-edit-product.component';
import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { MiusuarioComponent } from './componentes/miusuario/miusuario.component';
import { ControlplagasComponent } from './componentes/controlplagas/controlplagas.component';
import { HerrjardineriaComponent } from './componentes/herrjardineria/herrjardineria.component';
import { ArtdecorativosComponent } from './componentes/artdecorativos/artdecorativos.component';
import { PlantasComponent } from './componentes/plantas/plantas.component';


const routes: Routes = [
  {path: '', redirectTo: '/inicio', pathMatch: 'full'},
  {path: 'inicio', component: InicioComponent},
  {path: 'semillas', component: SemillasComponent},
  { path: 'productos', component: ListProductsComponent },
  { path: '', component: ListProductsComponent },
  { path: 'add', component: AddEditProductComponent },
  { path: 'crearusuario', component: UsuarioComponent},
  { path: 'verusuario', component: MiusuarioComponent},
  {path:  'plantas', component: PlantasComponent},
  {path: 'controlplagas',component: ControlplagasComponent},
   {path: 'herrjardineria',component: HerrjardineriaComponent},
   {path: 'artdecorativos', component: ArtdecorativosComponent},
  { path: '**', redirectTo: '' , pathMatch: 'full' },
  
  // 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
