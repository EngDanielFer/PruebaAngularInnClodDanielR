import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { EliminarProyectoComponent } from './pages/eliminar-proyecto/eliminar-proyecto.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'proyectos', component: ProyectosComponent },
      { path: 'eliminar', component: EliminarProyectoComponent },
      { path: '**', redirectTo: 'proyectos' }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class ProyectosRoutingModule { }
