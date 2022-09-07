import { Component, Input, Output, EventEmitter } from '@angular/core';
import { alumno } from './../../modelos/alumno.module';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss']
})
export class ListaAlumnosComponent {
  @Input() public alumnos: Array<alumno> = [];
  @Output() public posIndex = new EventEmitter<number>();

  public escucharId(id: number): void {
    const pos = this.alumnos.findIndex((elemento) => {
      return id === elemento.id;
    });
    this.posIndex.emit(pos);
  }
}
