import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { ArticuloComponent } from './articulo/articulo.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
  declarations: [
    ArticuloComponent,
    MenuComponent,
    NoticiaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PipesModule
  ],
  exports: [
    ArticuloComponent,
    MenuComponent,
    NoticiaComponent
  ]
})
export class ComponentesModule { }
