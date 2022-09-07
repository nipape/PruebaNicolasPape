import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioSeccionComponent } from './formulario-seccion/formulario-seccion.component';
import { FormularioAlumnoComponent } from './formulario-alumno/formulario-alumno.component';
import { ListaHistorialComponent } from './lista-historial/lista-historial.component';
import { ListaAlumnosComponent } from './lista-alumnos/lista-alumnos.component';
import { HistorialComponent } from './historial/historial.component';
import { AlumnoComponent } from './alumno/alumno.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioSeccionComponent,
    FormularioAlumnoComponent,
    ListaHistorialComponent,
    ListaAlumnosComponent,
    HistorialComponent,
    AlumnoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
