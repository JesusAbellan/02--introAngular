import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';


const rutas:Routes = [
  {
    path: 'inicio',
    component:InicioComponent
  },
  {
    path: 'noticias',
    loadChildren: () => import('./pages/noticias/noticias.module').then(m=>m.NoticiasModule)
  },
  {
    path: 'sugerencias',
    loadChildren: () => import('./pages/sugerencias/sugerencias.module').then(m => m.SugerenciasModule)
  },
  {
    path: 'articulos',
    loadChildren: () => import('./pages/articulos/articulos.module').then(m => m.ArticulosModule)
  },
  {
    path:'**',
    redirectTo:'inicio'
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(rutas)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
