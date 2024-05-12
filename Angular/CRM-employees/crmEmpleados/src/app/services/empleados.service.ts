import { Empleado } from './../interfaces/empleado.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmpleadosService {
  baseUrl: string = 'https://crm-empleados.onrender.com/api/empleados';
  constructor(private httpClient: HttpClient) {}

  // Crear los diferentes metodos que me permitan leer, crear, borrar y actualizar la base de datos. Create Read Update Delete (CRUD)

  /*
  GET - leer - READ
  POST - insertar- CREATE
  PUT/PATH - actualizar - UPDATE
  DELETE - borrar - DELETE
  */

  // * getAll trae todos los empleados de la base de datos
  getAll(): Observable<Empleado[]> {
    return this.httpClient.get<Empleado[]>(this.baseUrl);
  }

  // * getById trae la información de un único empleado por _id
  getById(_id: string): Observable<Empleado> {
    return this.httpClient.get<Empleado>(`${this.baseUrl}/${_id}`);
  }

  // * insert inserta un empleado dentro de la base de datos
  insert(nuevoEmpleado: Empleado): Observable<Empleado> {
    return this.httpClient.post<Empleado>(this.baseUrl, nuevoEmpleado);
  }

  // * delete elimina un empleado de la base de datos
  delete(_id: string): Observable<Empleado> {
    return this.httpClient.delete<Empleado>(this.baseUrl + '/' + _id);
  }

  // * update modifica un empleado
  update(empleadoActualizado: Empleado): Observable<Empleado> {
    return this.httpClient.put<Empleado>(
      this.baseUrl + '/' + empleadoActualizado._id,
      empleadoActualizado
    );
  }
}
