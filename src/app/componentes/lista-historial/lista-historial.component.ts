import { Component, Input, Output, EventEmitter } from '@angular/core';
import { registro-historial.module } from './../../modelos/registro-historial.module';

@Component({
  selector: 'app-lista-historial',
  templateUrl: './lista-historial.component.html',
  styleUrls: ['./lista-historial.component.scss']
})
export class ListaHistorialComponent {
  @Input() public historiales: Array<registro-historial.module> = [];
  @Output() public posIndex = new EventEmitter<number>();

  public escucharId(id: number): void {
    const pos = this.historiales.findIndex((elemento) => {
      return id === elemento.id;
    });
    this.posIndex.emit(pos);
  }
}
