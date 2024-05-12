import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  logado: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    if (localStorage.getItem('token')) {
      this.logado = true;
    }
    // this.logado = localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    // this.router.navigate(['/login']);
    window.location.href = 'http://localhost:4200/';
  }
}
