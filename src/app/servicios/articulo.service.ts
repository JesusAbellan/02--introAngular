import { EventEmitter, Injectable } from '@angular/core';
import { ArticuloItem } from '../interfaces/articuloitem.interface';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {

  public emitCompraArticulo:EventEmitter<ArticuloItem> = new EventEmitter();
  constructor() { }
}
