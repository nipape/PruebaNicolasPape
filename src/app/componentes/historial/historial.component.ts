import { Component, Input, Output, EventEmitter } from '@angular/core';
import { registro-historial } from './../../modelos/registrohistorial';
@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss']
})
export class HistorialComponent {
  @Input() public historial!: registro-historial;
  @Output() public idHistorial = new EventEmitter<number>();
  public emitirRut(): void {
    this.idHistorial.emit(this.historial.id);
  }

}
