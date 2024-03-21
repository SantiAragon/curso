import { Component } from '@angular/core';
import { AltaCompetenciaService } from 'src/app/services/alta-competencia/alta-competencia.service';

@Component({
  selector: 'app-alta-competencia',
  templateUrl: './alta-competencia.component.html',
  styleUrls: ['./alta-competencia.component.css']
})
export class AltaCompetenciaComponent {

  constructor(private altaCompetenciaService: AltaCompetenciaService) { }

  onSubmit(data: any) {
    this.altaCompetenciaService.altaCompetencia(data);
  }
}
