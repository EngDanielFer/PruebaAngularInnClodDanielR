import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-eliminar-proyecto',
  templateUrl: './eliminar-proyecto.component.html',
  styleUrls: ['./eliminar-proyecto.component.css']
})
export class EliminarProyectoComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EliminarProyectoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { titulo: string, mensaje: string }
  ) { }

  ngOnInit(): void {
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }

  onConfirm(): void {
    this.dialogRef.close(true);
  }

}
