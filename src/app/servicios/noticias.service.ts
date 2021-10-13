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
    const url = 'https://newsapi.org/v2/everything?q=andalucismo&from=2021-09-13&sortBy=publishedAt&apiKey=9c2d935a907d43c3b0838014c114e6db';
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
