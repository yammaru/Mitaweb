import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/Estampado/models/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-producto-mostrar',
  templateUrl: './producto-mostrar.component.html',
  styleUrls: ['./producto-mostrar.component.css']
})
export class ProductoMostrarComponent implements OnInit {
  personas: Persona[];
  searchText: string;
 persona = new Persona;

  constructor(private personaService: PersonaService ) { }
 
    
  eliminar() {
    this.personaService.Eliminar(this.persona.identificacion).subscribe(p =>{
      if (p != null) {
            alert('Se a ejecutado la eliminacion con exito');
        this.persona = p;
      }
    });
  }
  ngOnInit() {
      this.personaService.get().subscribe(result => {
        this.personas = result;
      });
    }
}
