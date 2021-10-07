import { Component, Input, OnInit } from '@angular/core';
import { ArticuloItem } from '../../interfaces/articuloitem.interface';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {

  @Input() item:ArticuloItem;

  constructor() { }

  ngOnInit(): void {
  }

  descuento(item: ArticuloItem): void{
    item.descuento = !item.descuento;
  }
}
