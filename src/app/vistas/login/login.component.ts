import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  /*
    Metodo para redirigir al componente registro desde el login.
  */
  registro(){
    this.router.navigate(['vistas/registro']);
  }
}
