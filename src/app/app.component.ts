import { Component, NgModule } from '@angular/core';
import { registro-historial } from './modelos/registrohistorial';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public elementosGuardados: Array<HistoriaImagen> = [];

  public imagen: string = 'import { Component, NgModule } from '@angular/core';
  import { HistoriaImagen } from './modelos/historia-imagen';

  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
  })
  export class AppComponent {
    public elementosGuardados: Array<HistoriaImagen> = [];

    public imagen: string = 'https://univia.info/wp-content/uploads/2015/09/33.jpg';
    public imagen2: string = 'https://static3.elcorreo.com/www/multimedia/202012/03/media/cortadas/fotoleadsuspenso-648x400-kThF-U120892665668CyB-624x385@RC.jpg';

    public escuchandoAlHijo(){
      console.log('Hola desde el padre!!');
    }
    public escuchandoDetalle(hijo: string){
      console.log('El padre dice',hijo);
    }
    public agregarNuevo(nuevo: HistoriaImagen): void {
      const id: number = this.elementosGuardados.length + 1;
      nuevo.id = id;
      this.elementosGuardados.push(nuevo);
    }
    public borrarElemento(pos: number): void {
      this.elementosGuardados.splice(pos,1);
      console.log('La pos es', pos);
    }
  }
  ';

  public escuchandoAlHijo(){
    console.log('Hola desde el padre!!');
  }
  public escuchandoDetalle(hijo: string){
    console.log('El padre dice',hijo);
  }
  public agregarNuevo(nuevo: HistoriaImagen): void {
    const id: number = this.elementosGuardados.length + 1;
    nuevo.id = id;
    this.elementosGuardados.push(nuevo);
  }
  public borrarElemento(pos: number): void {
    this.elementosGuardados.splice(pos,1);
    console.log('La pos es', pos);
  }
}
