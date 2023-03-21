import { Injectable, ɵgetUnknownPropertyStrictMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Formulario } from './formulario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  private readonly API = 'http://localhost:3000/formulario';

  constructor(private http: HttpClient) { }

  //metodo get serve para listar os cadastros que contém na API.
  listar(): Observable<Formulario[]>{
    return this.http.get<Formulario[]>(this.API)
  }

  criar(formulario: Formulario): Observable<Formulario> {
    return this.http.post<Formulario>(this.API, formulario)
  }

  editar(formulario: Formulario): Observable<Formulario> {
    const url = `${this.API}/${formulario.id}`
    return this.http.put<Formulario>(url, formulario)
  }

  excluir(id: number): Observable<Formulario> {
    const url = `${this.API}/${id}`
    return this.http.delete<Formulario>(url)
  }

  buscarPorId(id: number): Observable<Formulario> {
    const url = `${this.API}/{id}`
    return this.http.get<Formulario>(url)
  }

}
