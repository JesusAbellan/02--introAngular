import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../../servicios/noticias.service';
import { Noticias } from '../../interfaces/respuesta';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  constructor(private noticiasService:NoticiasService) { }
  public noticias:Noticias[];

  async ngOnInit() {
    this.noticias = (await this.noticiasService.getNoticias()).articles;
  }

}
