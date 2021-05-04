import { JsonpInterceptor } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from 'src/app/@base/alert-modal/alert-modal.component';
import { PersonaService } from 'src/app/services/persona.service';
import { Persona } from '../models/persona';

@Component({
  selector: 'app-persona-registro',
  templateUrl: './persona-registro.component.html',
  styleUrls: ['./persona-registro.component.css']
})
export class PersonaRegistroComponent implements OnInit {
  formGroup: FormGroup;

  persona: Persona;
  constructor(private personaService: PersonaService, private formBuilder: FormBuilder, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.buildForm();
  }
  private buildForm() {
    this.persona = new Persona();
    this.persona.identificacion = '';
    this.persona.nombre = '';
    this.persona.direccion = '';
    this.persona.barrio = '';
    // tslint:disable-next-line:no-unused-expression
    this.persona.costo ;
    this.persona.estado = '';

    this.formGroup = this.formBuilder.group({
      identificacion: [this.persona.identificacion, Validators.required],
      nombre: [this.persona.nombre, Validators.required],
      direccion: [this.persona.direccion, Validators.required],
      barrio: [this.persona.barrio, Validators.required],
      costo: [this.persona.costo, Validators.required],
      estado: [this.persona.estado, Validators.required]
    });
  }
  onSubmit() {
    if (this.formGroup.invalid) {
      return;
    }
    this.add();
  }
  get control() { return this.formGroup.controls; }

// aqui va la validadcion de estado
  add() {
    this.persona = this.formGroup.value;
    this.personaService.post(this.persona).subscribe(p => {
      if (p != null) {
        const messageBox = this.modalService.open(AlertModalComponent);
 messageBox.componentInstance.title = 'Adivina...';
 messageBox.componentInstance.message = '(/*-*)/(/*-*)/(/*-*)/ --- la Persona fue creada! --- (/*-*)/(/*-*)/(/*-*)/';

        this.persona = p;
      }
    });
  }

}
