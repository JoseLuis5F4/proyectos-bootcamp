import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Empleado } from 'src/app/interfaces/empleado.interface';
// import { Observable } from 'rxjs';
// import { DetallesService } from '../services/detalles.service';

@Component({
  selector: 'app-empleado-card',
  templateUrl: './empleado-card.component.html',
  styleUrls: ['./empleado-card.component.css'],
})
export class EmpleadoCardComponent {
  // La exclamacion sirve para no tener que inicializar el input
  @Input() empleadito!: Empleado;
  @Output() cerrar = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onCerrar() {
    this.cerrar.emit();
  }
}
