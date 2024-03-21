import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loggedIn: boolean = false;

  constructor() { }

  login(username: string, password: string): boolean {
    // Lógica de autenticación...
    // Aquí podrías hacer una llamada a una API para autenticar al usuario
    // Por simplicidad, vamos a simular una autenticación exitosa
    this.loggedIn = true;
    return true;
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }
}
