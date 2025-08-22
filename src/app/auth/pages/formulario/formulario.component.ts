import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

const patronClave = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formulario!: FormGroup;
  controlUsuario!: FormControl;
  controlClave!: FormControl;

  loginUser: string | null = null;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.controlUsuario = new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50)
    ]);

    this.controlClave = new FormControl('', [
      Validators.required,
      Validators.pattern(patronClave)
    ]);

    this.formulario = this.formBuilder.group({
      usuario: this.controlUsuario,
      clave: this.controlClave
    });

    this.loginUser = localStorage.getItem('usuario');
  }

  onSubmit(): void {
    if(this.formulario.valid) {
      const usuario = this.formulario.value.usuario;
      const clave = this.formulario.value.clave;

      localStorage.setItem('usuario', usuario);

      this.loginUser = usuario;

      this.formulario.reset();
    }
  }

  logout(): void {
    localStorage.removeItem('usuario');
    this.loginUser = null;
  }

}
