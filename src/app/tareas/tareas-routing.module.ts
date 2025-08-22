import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TareasComponent } from './pages/tareas/tareas.component';
import { EliminarTareaComponent } from './pages/eliminar-tarea/eliminar-tarea.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'tareas', component: TareasComponent },
      { path: 'eliminar', component: EliminarTareaComponent },
      { path: '**', redirectTo: 'tareas' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TareasRoutingModule { }
