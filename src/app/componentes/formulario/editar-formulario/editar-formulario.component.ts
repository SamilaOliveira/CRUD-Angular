import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormularioService } from '../formulario.service';

@Component({
  selector: 'app-editar-formulario',
  templateUrl: './editar-formulario.component.html',
  styleUrls: ['./editar-formulario.component.css']
})
export class EditarFormularioComponent implements OnInit {

  formulario!: FormGroup;


  constructor(
      private service: FormularioService,
      private router: Router,
      private route: ActivatedRoute,
      private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(parseInt(id!)).subscribe((formulario) =>
      this.formulario = this.formBuilder.group({
        id: [formulario.id],
        nome: [formulario.nome, Validators.compose(
          [Validators.pattern(/(.|\s)*\S(.|\s)*/)
        ])],
        email: [formulario.email, Validators.compose([
          Validators.required
        ])],
        modelo: [formulario.modelo]
      })
  )}

  editarCadastro(){
      this.service.editar(this.formulario.value).subscribe(() =>
          this.router.navigate(['/listarFormulario'])
  )}

  cancelar(){
      this.router.navigate(['/listarFormulario'])
  }

  habilitarBotao(): string{
    if(this.formulario.valid){
      return "botao"
    } else {
      return "botao__desabilitado"
    }

  }
}
