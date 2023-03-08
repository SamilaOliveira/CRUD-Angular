import { Component } from '@angular/core';

@Component({
  selector: 'app-criar-formulario',
  templateUrl: './criar-formulario.component.html',
  styleUrls: ['./criar-formulario.component.css']
})
export class CriarFormularioComponent {

  formulario = {
    id: '1',
    nome:  '',
    conteudo: '',
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
