import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private usuariosService: UsuariosService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: [null, []],
      password: [null, []],
    });
  }

  onSubmit() {
    // console.log(this.loginForm.value);
    this.usuariosService
      .login(this.loginForm.value)
      .subscribe((response: any) => {
        // console.log(response);
        if (response.success) {
          // Logado correctamente, guardamos en localstorage el token
          localStorage.setItem('token', response.token); // setItem para guardar, getItem para obtener, removeItem para borrar
          this.router.navigate(['/empleados']);
        } else {
          alert('Usuario erróneo');
        }
      });
  }
}
