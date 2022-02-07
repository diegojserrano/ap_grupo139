import { Component } from '@angular/core';
import { Estudio } from 'src/estudio';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
  nombre = "Juan Perez"
  cargo = "Analista Programador"

  estudios: Estudio[] = []
  editando: Boolean = false


  constructor() {
    this.estudios.push(new Estudio("Jardinería","Academia de jardineria", "2000-2004"))
    this.estudios.push(new Estudio("Ingeniería nuclear","Instituto Balseiro","2005-2019"))
    this.estudios.push(new Estudio("Programación","Universidad del medio ambiente","2022-"))
  }

  borrar(i: number) {
    this.estudios.splice(i,1)
  }

  agregar() {
    this.editando = true;
  }

  cancelar() { this.editando = false; }


}
