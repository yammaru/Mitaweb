import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { AlertModalComponent } from '../@base/alert-modal/alert-modal.component';

@Injectable({
    providedIn: 'root'
    })
    export class HandleHttpErrorService {
    constructor(private modalService: NgbModal) { }
    public handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
        if (error.status === '500') {
            this.mostrarError500(error);
            }
            if (error.status === '400') {
            this.mostrarError400(error);
            } else if (error.status === '401') {
                this.mostrarError(error);
                }

    return of(result as T);
    };
    }
    mostrarError(error: any) {

    }
    mostrarError500(error: any) {
        throw new Error('Method not implemented.');
    }
    mostrarError400(error: any) {
        console.error(error);
        // tslint:disable-next-line: no-inferrable-types
        let contadorValidaciones: number = 0;
        // tslint:disable-next-line:no-inferrable-types
        let mensajeValidaciones: string =
        `Señor(a) usuario(a), se han presentado algunos errores de validación, por favor revíselos y vuelva a realizar la
        operación.<br/><br/>`;
        // tslint:disable-next-line:forin
        for (const prop in error.error.errors) {
        contadorValidaciones++;
        mensajeValidaciones += `<strong>${contadorValidaciones}. ${prop}:</strong>`;
        error.error.errors[prop].forEach(element => {
        mensajeValidaciones += `<br/> - ${element}`;
        });
        mensajeValidaciones += `<br/>`;
        }
        const modalRef = this.modalService.open(AlertModalComponent);
        modalRef.componentInstance.title = 'Mensaje de Error';
        modalRef.componentInstance.message = mensajeValidaciones;

    }
    public log(message: string) {
        const messageBox = this.modalService.open(AlertModalComponent);
        messageBox.componentInstance.title = 'Resultado Operación';
        messageBox.componentInstance.message = message;

    }
    }
