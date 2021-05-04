import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { PersonaConsultaComponent } from './Estampado/persona-consulta/persona-consulta.component';
import { PersonaRegistroComponent } from './Estampado/persona-registro/persona-registro.component';
import { AppRoutingModule } from './app-routing.module';
import { FiltroPersonaPipe } from './pipe/filtro-persona.pipe';
import { NgbAlertModule, NgbModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from './@base/alert-modal/alert-modal.component';
import { TiendaComponent } from './Estampado/tienda/tienda.component';
import { ProductoRegistrarComponent } from './Camisa/producto-registrar/producto-registrar.component';
import { ProductoMostrarComponent } from './Camisa/producto-mostrar/producto-mostrar.component';
import { LoginComponent } from './Admin/login/login.component';
import { MenuComponent } from './Admin/menu/menu.component';
import { ProductoEliminarComponent } from './Camisa/producto-eliminar/producto-eliminar.component';
import { ProductoActualizarComponent } from './Camisa/producto-actualizar/producto-actualizar.component';
import { JwtInterceptor } from './services/jwt-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    PersonaConsultaComponent,
    PersonaRegistroComponent,
    FiltroPersonaPipe,
    AlertModalComponent,
    TiendaComponent,
    ProductoRegistrarComponent,
    ProductoMostrarComponent,
    LoginComponent,
    MenuComponent,
    ProductoEliminarComponent,
    ProductoActualizarComponent
  ],
  imports: [NgbModalModule, NgbAlertModule,
    ReactiveFormsModule,
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'personaConsulta', component: PersonaConsultaComponent},
      { path: 'personaRegistro', component: PersonaRegistroComponent},
    ]),
    AppRoutingModule
  ],
  entryComponents: [AlertModalComponent],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
