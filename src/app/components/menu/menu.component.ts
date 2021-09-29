import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../interfaces/menuitem.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

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
  constructor() { }

  ngOnInit(): void {
  }

}
