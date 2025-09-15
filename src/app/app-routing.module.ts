import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SemillasComponent } from './semillas/semillas.component';
import { InicioComponent } from './inicio/inicio.component';
const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'semillas', component: SemillasComponent},
  
  // 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
