import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../interfaces/menuitem.interface';
import { ArticuloService } from '../../servicios/articulo.service';
import { ArticuloItem } from '../../interfaces/articuloitem.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public miSubscripcion:Subscription;
  public comprados:number = 0;
  public items:MenuItem[] = [
    {
      ruta: 'inicio',
      texto: 'Página inicial'
    },
    {
      ruta: 'noticias',
      texto: 'Noticias del día'
    },
    {
      ruta: 'articulos',
      texto: 'Artículos disponibles'
    },
    {
      ruta: 'sugerencias',
      texto: 'Sugerencias para ti'
    }
  ];
  constructor(private _articuloService:ArticuloService) { }

  ngOnInit(): void {
    this.miSubscripcion = this._articuloService.emitCompraArticulo.subscribe((data:ArticuloItem)=>{
      this.comprados++;
      console.log(data.nombre + ' comprado');
    })
  }

  ngOnDestroy():void{
    this.miSubscripcion.unsubscribe();
    console.log('Eliminamos la subscripción');
  }

  getTexto(indice:number){
    let cadenaComprados = this.comprados ===0 ? '' : ' (Comprados : ' + this.comprados +')';
    if(indice == 2){
      return this.items[indice].texto + cadenaComprados;;
    }
    return this.items[indice].texto;
  }
}
