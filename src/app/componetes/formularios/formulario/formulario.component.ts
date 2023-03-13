import { Component, Input, OnInit } from '@angular/core';
import { Formulario } from 'src/app/componentes/formulario/formulario';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Input() formulario: Formulario = {
      id: 0,
      nome: 'Samila',
      email: 'samilacampelo@gmail.com',
      modelo: 'modelo1'
  }

  constructor() {}

  ngOnInit(): void {

  }

  larguraFormulario(): string {
    if(this.formulario.nome.length >=256) {
      return 'formulario-g'
    }
    return 'formulario-p'
  }

}
