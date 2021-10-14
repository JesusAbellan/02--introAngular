import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Respuesta } from '../interfaces/respuesta';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private _http:HttpClient) { }
  getNoticias(){
    return new Promise<Respuesta>((resolve,reject) =>{
    const url = 'https://newsapi.org/v2/everything?q=andalucia&from=2021-10-05&sortBy=publishedAt&apiKey=6cb729d487bf4924841d3c33f4f4d71c';
    this._http.get<Respuesta>(url).subscribe(resp => {
      
      if(resp.status=='ok'){
        resolve(resp);
      }else{
        reject(new Error("Error en el servidor"));
      }
    }, err => {
      console.log(err);
      reject(err);
    })
  })
  }
}
