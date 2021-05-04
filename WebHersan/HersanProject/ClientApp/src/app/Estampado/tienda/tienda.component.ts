import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';
import { Persona } from '../models/persona';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {

  personas: Persona[];
  searchText: string;

  constructor(private personaService: PersonaService ) { }


  ngOnInit() {
      this.personaService.get().subscribe(result => {
        this.personas = result;
      });
  }

}
