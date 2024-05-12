import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEmpleadosComponent } from './pages/lista-empleados/lista-empleados.component';
import { FormComponent } from './pages/form/form.component';
import { EmpleadoCardComponent } from './components/empleado-card/empleado-card.component';
import { EmpleadoViewComponent } from './pages/empleado-view/empleado-view.component';
import { LoginComponent } from './pages/login/login.component';
import { loginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: LoginComponent },
  {
    path: 'empleados',
    component: ListaEmpleadosComponent,
    canActivate: [loginGuard],
  },
  {
    path: 'nuevo-empleado',
    component: FormComponent,
    canActivate: [loginGuard],
  },
  {
    path: 'empleados/:idempleado',
    component: EmpleadoViewComponent,
    canActivate: [loginGuard],
  },
  {
    path: 'actualizar-empleado/:idempleado',
    component: FormComponent,
    canActivate: [loginGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
