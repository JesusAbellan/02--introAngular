import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Noticias } from 'src/app/interfaces/respuesta';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent implements OnInit {

  @Input()noticia: Noticias;
  @Output()emiteGuardaAutor:EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  abreEnlace(url:string){
    window.open(url,'_blank');
  }

  guardaAutor(autor:string){
    this.emiteGuardaAutor.emit(autor);
  }

}
