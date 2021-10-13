import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoticiasRoutingModule } from './noticias-routing.module';
import { NoticiasComponent } from './noticias.component';
import { ComponentesModule } from '../../components/componentes.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    NoticiasRoutingModule,
    ComponentesModule
  ]
})
export class NoticiasModule { }
