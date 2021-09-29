import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { SugerenciasComponent } from './sugerencias/sugerencias.component';
import { ArticulosComponent } from './articulos/articulos.component';



@NgModule({
  declarations: [
    InicioComponent,
    NoticiasComponent,
    SugerenciasComponent,
    ArticulosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InicioComponent,
    NoticiasComponent,
    SugerenciasComponent,
    ArticulosComponent
  ]
})
export class PagesModule { }
