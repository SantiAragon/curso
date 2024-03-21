import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaCompetenciaComponent } from './components/alta-competencia/alta-competencia.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [{ path:'', redirectTo:'login', pathMatch:'full' },
{ path:'login', component:LoginComponent},
{ path:'alta-competencia', component:AltaCompetenciaComponent},
{ path:'**', redirectTo:'login', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
