import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PersonaConsultaComponent } from './Estampado/persona-consulta/persona-consulta.component';
import { PersonaRegistroComponent } from './Estampado/persona-registro/persona-registro.component';
import { TiendaComponent } from './Estampado/tienda/tienda.component';
import { LoginComponent } from './Admin/login/login.component';
import { ProductoMostrarComponent } from './Camisa/producto-mostrar/producto-mostrar.component';
import { ProductoRegistrarComponent } from './Camisa/producto-registrar/producto-registrar.component';
import { MenuComponent } from './Admin/menu/menu.component';
import { ProductoActualizarComponent } from './Camisa/producto-actualizar/producto-actualizar.component';
import { ProductoEliminarComponent } from './Camisa/producto-eliminar/producto-eliminar.component';

const routes: Routes = [
  {
    path: 'personaConsulta',
    component: PersonaConsultaComponent,
  },
  {
    path: 'personaRegistro',
    component: PersonaRegistroComponent,
  },
  {
    path: 'Tienda',
    component: TiendaComponent,
  },
  {
    path: 'Login',
    component: LoginComponent,
  },
  {
    path: 'ProductoMostrar',
    component: ProductoMostrarComponent,
  },
  {
    path: 'ProductoRegistrar',
    component: ProductoRegistrarComponent,
  },  {
    path: 'Menu',
    component: MenuComponent,
  },
  {
    path: 'ProductoAcualizar',
    component: ProductoActualizarComponent,
  },
  {
    path: 'ProductoEliminar',
    component: ProductoEliminarComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
