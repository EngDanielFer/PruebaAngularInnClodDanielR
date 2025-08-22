import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Tarea } from 'src/app/interfaces/tarea.interface';
import { TareaService } from 'src/app/services/tarea.service';
import { EliminarTareaComponent } from '../eliminar-tarea/eliminar-tarea.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {
  id!: number;
  tareas: Tarea[] = [];
  formulario!: FormGroup

  constructor(
    private tareaServ: TareaService,
    private route: ActivatedRoute,
    private builder: FormBuilder,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.getDataFromSvc(this.id);

    this.formulario = this.builder.group({
      titulo: ['', Validators.required ],
      completada: [false]
    });
  }

  private getDataFromSvc(id: number): void {
    this.tareaServ.getTareaByUser(id).subscribe((res: any) => {
      this.tareas = [...this.tareas, ...res]
    })
  }

  editarTarea(tarea: Tarea) {
    this.formulario.patchValue({
      titulo: tarea.title,
      completada: tarea.completed
    })
  }

  eliminarTarea(id: number) {
    const refDialogo = this.dialog.open(EliminarTareaComponent, {
      width: '400px',
      data: {
        titulo: 'Eliminar tarea',
        mensaje: 'Confirmar eliminación de la tarea'
      }
    });

    refDialogo.afterClosed().subscribe(result => {
      if (result) {
        alert("Se ha eliminado la tarea");
      }
    });
  }

  onSubmit(): void {
    if (this.formulario.valid) {
      const { titulo, completada } = this.formulario.value;
      console.log("Guardando tarea: ", { titulo, completada });
    }
  }

}
