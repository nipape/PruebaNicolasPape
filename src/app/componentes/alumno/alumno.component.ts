import { Component, Input, Output, EventEmitter } from '@angular/core';
import { alumno } from './../../modelos/alumno';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.scss']
})
export class AlumnoComponent implements {
  @Input() public alumno!: HistoriaImagen;
  @Output() public rutAlumno = new EventEmitter<number>();
  public emitirRut(): void {
    this.idAlumno.emit(this.alumno.id);
  }
}
