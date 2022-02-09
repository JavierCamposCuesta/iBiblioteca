
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LibrosInterface } from './libros.interface';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class  BibliotecaService{

  searchUrl: string = 'http://openlibrary.org/search.json';
  constructor(private httpClient: HttpClient) { }

  // getLibros(isbn:string):Observable<LibrosInterface>{
  //   const params: Http = new Http()
  //   .set('isbn',isbn)
  //   .set('limit',1)
  //   const url= `${this.searchUrl}`
  //   return this.httpClient.get<OpenLibraryResponse>(url,{params});

  //   return this.http.get<LibrosInterface>(this.url);
  // }

  getBooks( searchTerm){
    // const searchTerm: string = 'javascript'
    const params: HttpParams = new HttpParams()
    .set('title',searchTerm)
    .set('limit',10)
    let url = `${this.searchUrl}`
    return this.httpClient.get<LibrosInterface>(url,{params})
  }

  getBook(isbn:string){
    const params: HttpParams = new HttpParams()
    .set('isbn',isbn)
    .set('limit',1)
    const url= `${this.searchUrl}`
    return this.httpClient.get<LibrosInterface>(url,{params});
  }
}