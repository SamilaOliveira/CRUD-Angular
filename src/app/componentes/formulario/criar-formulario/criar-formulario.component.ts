import { Component } from '@angular/core';

@Component({
  selector: 'app-criar-formulario',
  templateUrl: './criar-formulario.component.html',
  styleUrls: ['./criar-formulario.component.css']
})
export class CriarFormularioComponent {

  formulario = {
    id: '1',
    nome:  'Samila Oliveira',
    conteudo: 'Projeto Angular',
    modelo: 'modelo1'
  }

  constructor() {}

  criarCadastro(){
    alert("Novo cadastro criado!")
  }

  cancelar() {
    alert("Cadastro cancelado!")
  }

}
