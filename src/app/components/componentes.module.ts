import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { ArticuloComponent } from './articulo/articulo.component';
import { NoticiaComponent } from './noticia/noticia.component';



@NgModule({
  declarations: [
    ArticuloComponent,
    MenuComponent,
    NoticiaComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ArticuloComponent,
    MenuComponent,
    NoticiaComponent
  ]
})
export class ComponentesModule { }
