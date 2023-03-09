import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Input() formulario = {
      nome: 'Samila',
      email: 'samilacampelo@gmail.com',
      modelo: 'modelo1'
  }

  larguraFormulario(): string {
    if(this.formulario.nome.length >=256) {
      return 'formulario-g'
    }
    return 'formulario-p'
  }

  ngOnInit(): void {

  }
}
