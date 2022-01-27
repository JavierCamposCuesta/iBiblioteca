import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LibrosInterface } from './libros.interface';

@Injectable({
  providedIn: 'root'
})
export class  BibliotecaService{

  private url:string = "https://openlibrary.org/search.json?q=programacion&limit=10";
  constructor(private http:HttpClient) { }

  getLibros():Observable<LibrosInterface>{
    return this.http.get<LibrosInterface>(this.url);
  }
}