import { Component } from '@angular/core';
import { Formulario } from '../formulario';

@Component({
  selector: 'app-criar-formulario',
  templateUrl: './criar-formulario.component.html',
  styleUrls: ['./criar-formulario.component.css']
})
export class CriarFormularioComponent {

  formulario: Formulario = {
    id: 1,
    nome:  '',
    email: '',
    modelo: ''
  }

  constructor() {}

  criarCadastro(){
    alert("Novo cadastro criado!")
  }

  cancelar() {
    alert("Cadastro cancelado!")
  }

}
