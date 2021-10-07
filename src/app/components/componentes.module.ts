import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { ArticuloComponent } from './articulo/articulo.component';



@NgModule({
  declarations: [
    ArticuloComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ArticuloComponent,
    MenuComponent
  ]
})
export class ComponentesModule { }
