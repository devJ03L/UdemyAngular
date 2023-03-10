import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Pais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1'

  constructor(private http: HttpClient) { }

  buscarPais(termino: string): Observable<Pais[]>{
    const url = `${this.apiUrl}/name/${termino}`
    return this.http.get<Pais[]>(url)
  }

  buscarCapital(termino: string): Observable<Pais[]>{
    const url = `${this.apiUrl}/capital/${termino}`
    return this.http.get<Pais[]>(url)
  }

  getPaisPorAlpha(id: string): Observable<Pais[]>{
    const url = `${this.apiUrl}/alpha/${id}`
    return this.http.get<Pais[]>(url)
  }

  buscarRegion(region: string): Observable<Pais[]>{

    const httpParams = new HttpParams()
    .set('fields', 'name,capital,')
    const url = `https://restcountries.com/v2/regionalbloc/${region}`
    return this.http.get<Pais[]>(url)
  }
}
