import { Component, Input, OnInit } from '@angular/core';
import { ArticuloItem } from '../../interfaces/articuloitem.interface';
import { ArticuloService } from '../../servicios/articulo.service';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {

  @Input() item:ArticuloItem;

  constructor(private _articuloService:ArticuloService) { }

  ngOnInit(): void {
  }

  descuento(item: ArticuloItem): void{
    item.descuento = !item.descuento;
  }
  comprar(){
    this._articuloService.emitCompraArticulo.emit(this.item);
  }
}
