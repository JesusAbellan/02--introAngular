import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../../servicios/noticias.service';
import { Noticias } from '../../interfaces/respuesta';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  constructor(private _noticiasService: NoticiasService) { }
  public noticias: Noticias[] = [];

  async ngOnInit() {
    try {
      this.noticias = (await this._noticiasService.getNoticias()).articles;
    } catch (error) {
      console.log("Error recibiendo los datos de la promesa");
    }
  }
}
