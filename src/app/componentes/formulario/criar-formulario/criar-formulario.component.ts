import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Formulario } from '../formulario';
import { FormularioService } from '../formulario.service';

@Component({
  selector: 'app-criar-formulario',
  templateUrl: './criar-formulario.component.html',
  styleUrls: ['./criar-formulario.component.css']
})
export class CriarFormularioComponent {

  formulario: Formulario = {
    nome:  '',
    email: '',
    modelo: ''
  }

  constructor(
    private service: FormularioService,
    private router: Router
    ) {}

  criarCadastro(){
    alert("Cadastro realizado!")
    this.service.criar(this.formulario).subscribe(() => {
      this.router.navigate(['/listarFormulario'])
    })
  }

  cancelar() {
    alert("Cadastro cancelado!")
    this.router.navigate(['/listarFormulario'])
  }

}
