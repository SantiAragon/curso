import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { AltaCompetenciaService } from 'src/app/services/alta-competencia/alta-competencia.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alta-competencia',
  templateUrl: './alta-competencia.component.html',
  styleUrls: ['./alta-competencia.component.css']
})
export class AltaCompetenciaComponent {

  constructor(private altaCompetenciaService:AltaCompetenciaService, private loginService: LoginService, private router:Router) { }

  logout() {
    this.loginService.logout();
    // Redirige al usuario al inicio de sesión después de cerrar sesión
    this.router.navigate(['/login']);
  }
  onSubmit(data: any) {
    this.altaCompetenciaService.altaCompetencia(data);
  }
}
