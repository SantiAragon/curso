import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AltaCompetenciaService {

  constructor() { }

  altaCompetencia(data: any): void {
    // Lógica para realizar el alta de competencia...
    console.log('Competencia creada:', data);
  }
}
