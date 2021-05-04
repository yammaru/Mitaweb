import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/Estampado/models/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-producto-eliminar',
  templateUrl: './producto-eliminar.component.html',
  styleUrls: ['./producto-eliminar.component.css']
})
export class ProductoEliminarComponent implements OnInit {
  persona: Persona;

  constructor(private personaService: PersonaService) { }

  ngOnInit() {
    this.persona = new Persona;
  }
  buscar() {
    this.personaService.BuscarPersona(this.persona.identificacion).subscribe(p =>{
      if (p != null) {
               alert('Se a ejecutado la busqueda con exito');
        this.persona = p;
      }
   });
  }
   eliminar() {
    this.personaService.Eliminar(this.persona.identificacion).subscribe(p =>{
      if (p != null) {
               alert('Se a ejecutado la eliminacion con exito');
        this.persona = p;
      }
   });
  }
}
