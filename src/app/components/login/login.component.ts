import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    // Bloquear el scroll al cargar el componente de inicio de sesión
    document.body.style.overflow = 'hidden';
  }

  ngOnDestroy(): void {
    // Restablecer el scroll al salir del componente de inicio de sesión
    document.body.style.overflow = '';
  }
  onSubmit(username: string, password: string) {
    if (this.loginService.login(username, password)) {
      // Redirige al usuario a la página de alta competencia si el inicio de sesión es exitoso
      // Esto dependerá de tu lógica de enrutamiento
    } else {
      // Maneja el caso de inicio de sesión fallido
    }
  }
}
