import { Component, Output, EventEmitter } from '@angular/core';
import { registrohistorial } from 'src/app/modelos/registro-historial/registro-historial.module';
import { alumno.module } from './../../modelos/alumno.module';

@Component({
  selector: 'app-formulario-alumno',
  templateUrl: './formulario-alumno.component.html',
  styleUrls: ['./formulario-alumno.component.scss']
})
export class FormularioAlumnoComponent {
  @Output() public salida = new EventEmitter();
  @Output() public salidaString = new EventEmitter<string>();
  @Output() public enviarDato = new EventEmitter<HistoriaImagen>();
  public nuevoHistorial: registrohistorial = {
    fecha: "";
    hora: "";
    alumno: "";
  }
  public cambiarNombre(evento: Event): void {
    const elemento = evento.target as HTMLInputElement;
    this.nuevoHistorial.nombre = elemento.value;
    this.salida.emit();
  }
  public cambiarRut(evento: Event): void {
    const elemento = evento.target as HTMLInputElement;
    this.nuevoHistorial.rut = elemento.value;
    this.salidaString.emit(elemento.value);
  }
  public cambiarApellido(evento: Event): void {
    const elemento = evento.target as HTMLInputElement;
    this.nuevoHistorial.apellido = elemento.value;
    this.salida.emit();
  }
  public cambiarEdad(evento: Event): void {
    const elemento = evento.target as HTMLInputElement;
    this.nuevoHistorial.edad = elemento.value;
    this.salida.emit();
  }
  public cambiarSeccion(evento: Event): void {
    const elemento = evento.target as HTMLInputElement;
    this.nuevoHistorial.seccion = elemento.value;
    this.salida.emit();
  }
  public guardarHistorial(): void {
    const copia: HistoriaImagen = {
      ...this.nuevoHistorial
    }
    this.enviarDato.emit(copia);
    this.nuevoHistorial.nombre = '';
    this.nuevoHistorial.detalle = '';
    this.nuevoHistorial.imagen = '';
    console.log('Mensaje desde el hijo :D');
    this.salida.emit();
  }
}
