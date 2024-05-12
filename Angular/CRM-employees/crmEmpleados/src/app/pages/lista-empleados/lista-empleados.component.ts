import { Component } from '@angular/core';
import { Empleado } from 'src/app/interfaces/empleado.interface';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css'],
})
export class ListaEmpleadosComponent {
  /* Para poder usar el servicio de empleados debo injectarlo, para injectarlo tengo
  que añadirlo como parámetro dentro del método constructor
   */
  arrEmpleados: Empleado[] = [];
  constructor(private empleadosServices: EmpleadosService) {}

  ngOnInit() {
    // Llamar al servicio y me voy a traer los datos de este
    this.empleadosServices.getAll().subscribe((data) => {
      this.arrEmpleados = data;
    });
  }
}
