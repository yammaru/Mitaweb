import { Pipe, PipeTransform } from '@angular/core';
import { Persona } from '../Estampado/models/persona';

@Pipe({
  name: 'filtroPersona'
})
export class FiltroPersonaPipe implements PipeTransform {

  transform(persona: Persona[], searchText: string): any {
    if ( searchText == null) { return persona ; }
    return persona.filter(p => p.nombre.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
    );

  }

}
