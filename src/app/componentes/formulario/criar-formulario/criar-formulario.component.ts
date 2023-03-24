import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormularioService } from '../formulario.service';

@Component({
  selector: 'app-criar-formulario',
  templateUrl: './criar-formulario.component.html',
  styleUrls: ['./criar-formulario.component.css']
})
export class CriarFormularioComponent {

  formulario!: FormGroup;

  constructor(
    private service: FormularioService,
    private router: Router,
    private formBuilder: FormBuilder
    ) {}

    ngOnInit(): void {
      this.formulario = this.formBuilder.group({
        nome: ['', [Validators.required]],
        email: ['', [Validators.required]],
        modelo: ['modelo1']
      })
    }

  criarCadastro(){
    console.log(this.formulario.get('email')?.errors)
    if(this.formulario.valid){
      alert("Cadastro realizado!")
      this.service.criar(this.formulario.value).subscribe(() => {
        this.router.navigate(['/listarFormulario'])
      })
    }
  }

  cancelar() {
    alert("Cadastro cancelado!")
    this.router.navigate(['/listarFormulario'])
  }

  habilitarBotao(): string {
    if(this.formulario.valid){
      return 'botao'
    } else {
      return 'botao__desabilitado'
    }
  }

}
