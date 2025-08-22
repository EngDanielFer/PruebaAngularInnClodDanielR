import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TareasRoutingModule } from './tareas-routing.module';
import { TareasComponent } from './pages/tareas/tareas.component';
import { EliminarTareaComponent } from './pages/eliminar-tarea/eliminar-tarea.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    TareasComponent,
    EliminarTareaComponent
  ],
  imports: [
    CommonModule,
    TareasRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule
]
})
export class TareasModule { }
