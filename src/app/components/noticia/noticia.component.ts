import { Component, Input, OnInit } from '@angular/core';
import { Noticias } from 'src/app/interfaces/respuesta';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent implements OnInit {

  @Input()noticia: Noticias;
  constructor() { }

  ngOnInit(): void {
  }
  abreEnlace(url:string){
    window.open(url,'_blank');
  }

}
