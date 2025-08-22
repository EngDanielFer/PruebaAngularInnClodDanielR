import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/interfaces/proyecto.interface';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { EliminarProyectoComponent } from '../eliminar-proyecto/eliminar-proyecto.component';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  formulario!: FormGroup;
  controlNombre!: FormControl;

  proyectos: Proyecto[] = [];

  constructor(
    private proyectoServ: ProyectoService,
    private formBuilder: FormBuilder,
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.controlNombre = new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]);

    this.formulario = this.formBuilder.group({
      nombre: this.controlNombre,
      descripcion: ['']
    });

    this.getDataFromSvc();
  }

  private getDataFromSvc(): void {
    this.proyectoServ.getTodosProyectos().subscribe((res: any) => {
      this.proyectos = [...this.proyectos, ...res]
    })
  }

  edtarProyecto(proyecto: Proyecto) {
    this.formulario.patchValue({
      nombre: proyecto.name,
      descripcion: proyecto.company.catchPhrase
    });
  }

  eliminarProyecto(id: number) {
    const refDialogo = this.dialog.open(EliminarProyectoComponent, {
      width: '400px',
      data: {
        titulo: 'Eliminar dato',
        mensaje: 'Confirmar eliminación del proyecto'
      }
    });

    refDialogo.afterClosed().subscribe(result => {
      if (result) {
        alert("Se ha eliminado el proyecto");
      }
    });
  }

  onSubmit(): void {
    if (this.formulario.valid) {
      const nombre = this.formulario.value.nombre;
    }
  }

  redirigirATareas(id: number) {
    this.router.navigate(['/tareas', id]);
  }

}
