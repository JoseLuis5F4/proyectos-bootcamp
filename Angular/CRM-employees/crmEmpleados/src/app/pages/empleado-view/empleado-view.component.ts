import { EmpleadosService } from './../../services/empleados.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from 'src/app/interfaces/empleado.interface';

@Component({
  selector: 'app-empleado-view',
  templateUrl: './empleado-view.component.html',
  styleUrls: ['./empleado-view.component.css'],
})
export class EmpleadoViewComponent {
  empleado!: Empleado;

  constructor(
    private activatedRoute: ActivatedRoute,
    private EmpleadosService: EmpleadosService,
    private router: Router
  ) {}

  ngOnInit() {
    // Tenemos que capturar el id de la ruta
    this.activatedRoute.params.subscribe((params: any) => {
      // console.log(params); Llamamos a los parametros y con "subscribe" pedimos que nos avise y llamamos a una función, ejecutandola dependiendo del parámetro dinámico del id del empleado
      const id = params.idempleado;
      // Teniendo el id solo tengo que consultar al servicio al método getById
      this.EmpleadosService.getById(id).subscribe((data) => {
        // console.log(data);
        this.empleado = data;
      });
    });
  }

  onDelete(id: string | undefined) {
    if (id) {
      this.EmpleadosService.delete(id).subscribe((response: Empleado) => {
        // console.log(response);
        if (response._id) {
          alert('Empleado borrado correctamente');
          this.router.navigate(['/empleados']);
        } else {
          alert('El empleado no ha podido borrarse');
        }
      });
    }
  }
}
