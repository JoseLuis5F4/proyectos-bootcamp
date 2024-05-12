import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { EmpleadoCardComponent } from './components/empleado-card/empleado-card.component';
import { FormComponent } from './pages/form/form.component';
import { ListaEmpleadosComponent } from './pages/lista-empleados/lista-empleados.component';
import { HttpClientModule } from '@angular/common/http';
import { EmpleadoViewComponent } from './pages/empleado-view/empleado-view.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EmpleadoCardComponent,
    FormComponent,
    ListaEmpleadosComponent,
    EmpleadoViewComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
