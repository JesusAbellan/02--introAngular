import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiFechaPipe } from './miFecha/mi-fecha.pipe';



@NgModule({
  declarations: [
    MiFechaPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MiFechaPipe
  ]
})
export class PipesModule { }
