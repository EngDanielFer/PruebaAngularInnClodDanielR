import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { ProyectosRoutingModule } from './proyectos-routing.module';
import { EliminarProyectoComponent } from './pages/eliminar-proyecto/eliminar-proyecto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    ProyectosComponent,
    EliminarProyectoComponent
  ],
  imports: [
    CommonModule,
    ProyectosRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule
  ]
})
export class ProyectosModule { }
