import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data, Hit } from '../interface/data';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  private baseUrl: string='https://pixabay.com/api/';
  public cargando: boolean= false;
  constructor(private http: HttpClient) { }

  get params(){
    return {  key:'13119377-fc7e10c6305a7de49da6ecb25',
              language:'es'

  }
  }

  getImg(): Observable<Hit[]>{

    if(this.cargando){
      return of([]);
    }

    this.cargando=true;
    return this.http.get<Data>(`${this.baseUrl}`,{
      params: this.params
    }).pipe(
      map((resp)=> resp.hits),
      tap(()=>{
        this.cargando=false;
      })
    );
  }
}
