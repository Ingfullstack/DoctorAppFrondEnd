import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Login } from '../interfaces/login';
import { Observable } from 'rxjs';
import { Sesion } from '../interfaces/sesion';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private baseUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public iniciarSesion(request: Login):Observable<Sesion>{
    return this.http.post<Sesion>(`${this.baseUrl}/usuarios/login`, request);
  }
}
