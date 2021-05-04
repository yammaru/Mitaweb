import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Persona } from '../Estampado/models/persona';
import { HandleHttpErrorService } from './handleHttpError';




@Injectable({
  providedIn: 'root'
})

export class PersonaService {
  baseUrl: string;
  constructor(private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string,
    private handleErrorService: HandleHttpErrorService) {
       this.baseUrl = baseUrl;
    }
  get(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.baseUrl + 'api/Persona')
    .pipe(
    tap(_ => this.handleErrorService.log('datos enviados')),
    catchError(this.handleErrorService.handleError<Persona[]>('Consulta Persona', null))
    );
    }
  post(persona: Persona): Observable<Persona> {
    return this.http.post<Persona>(this.baseUrl + 'api/Persona', persona)
    .pipe(
    tap(_ => this.handleErrorService.log('datos enviados')),
    catchError(this.handleErrorService.handleError<Persona>('Registrar Persona', null))
    );
    }
    BuscarPersona(identificacion: string): Observable<Persona> {
      return this.http.get<Persona>(this.baseUrl + 'api/Persona/5' + identificacion)
      .pipe(
          tap(_ => this.handleErrorService.log('datos enviados')),
          catchError(this.handleErrorService.handleError<Persona>('busqueda', null))
      );
    }

    Eliminar(identificacion: string): Observable<Persona> {
      return this.http.delete<Persona>(this.baseUrl + 'api/Persona/5' + identificacion).pipe (
        tap(_ => this.handleErrorService.log('datos enviados')),
        catchError(this.handleErrorService.handleError<Persona>('Eliminar', null))
      );
    }



}
