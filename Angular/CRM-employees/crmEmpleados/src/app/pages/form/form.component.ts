import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Empleado } from 'src/app/interfaces/empleado.interface';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  empleadosForm: FormGroup;
  title: string = 'Nuevo';

  constructor(
    private formBuilder: FormBuilder,
    private empleadosService: EmpleadosService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    // Inicializo el formulario con todos sus campos
    this.empleadosForm = this.formBuilder.group({
      nombre: [null, []],
      apellidos: [null, []],
      telefono: [null, []],
      email: [null, []],
      departamento: [null, []],
      salario: [null, []],
    });
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      const id = params.idempleado;
      if (id) {
        this.title = 'Actualizar';
        // Actualizado
        // Traerme los datos de un usuario por id.
        this.empleadosService.getById(id).subscribe((data: Empleado) => {
          // Aqui relleno el formulario con los campos de data
          this.empleadosForm = this.formBuilder.group({
            _id: [data._id, []],
            nombre: [data.nombre, []],
            apellidos: [data.apellidos, []],
            email: [data.email, []],
            telefono: [data.telefono, []],
            departamento: [data.departamento, []],
            salario: [data.salario, []],
          });
        });
      }
    });
  }

  onSubmit() {
    if (this.empleadosForm.value._id) {
      // Actualizando
      const empleadoActualizado = this.empleadosForm.value;
      this.empleadosService
        .update(empleadoActualizado)
        .subscribe((response: Empleado) => {
          // console.log(response);
          if (response._id) {
            // Se recomienda recargar la página
            // window.location.reload; Puede ser asi o de la otra manera
            this.router.navigate(['/empleados', response._id, 'dd']);
          }
        });
    } else {
      // console.log(this.empleadosForm.value);
      const nuevoEmpleado = this.empleadosForm.value;
      this.empleadosService.insert(nuevoEmpleado).subscribe((response) => {
        if (response._id) {
          // Redirijo a empleados para ver el nuevo empleado
          this.router.navigate(['/empleados']);
        } else {
          alert('Usuario no se ha podido crear, inténtalo de nuevo');
        }
      });
    }
  }
}
