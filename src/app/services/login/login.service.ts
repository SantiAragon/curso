import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loggedIn: boolean = false;
  private usuarios = [
    { username: '45653422', password: '123' }
  ];

  constructor(private router:Router) { }
  // Lógica de autenticación...
    // Aquí podrías hacer una llamada a una API para autenticar al usuario
    // Por simplicidad, vamos a simular una autenticación exitosa
  login(username: string, password: string): boolean {
    const user = this.usuarios.find(u => u.username === username && u.password === password);

    if (user) {
      // Autenticación exitosa
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.loggedIn = true;
      this.router.navigate(['/alta-competencia']);
      return true;
    } else {
      // Autenticación fallida
      return false;
    }
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  logout() {
    // Elimina el usuario actual del almacenamiento local al cerrar sesión
    localStorage.removeItem('currentUser');
  }
}
