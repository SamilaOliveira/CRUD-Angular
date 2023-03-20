import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formulario } from '../formulario';
import { FormularioService } from '../formulario.service';

@Component({
  selector: 'app-editar-formulario',
  templateUrl: './editar-formulario.component.html',
  styleUrls: ['./editar-formulario.component.css']
})
export class EditarFormularioComponent implements OnInit {

  formulario: Formulario = {
    id: 0,
    nome: '',
    email: '',
    modelo:''
  }

  constructor(
      private service: FormularioService,
      private router: Router,
      private route: ActivatedRoute
  ){ }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(parseInt(id!)).subscribe((formulario) =>
      this.formulario = formulario
  )}

  editarCadastro(){
      this.service.editar(this.formulario).subscribe(() =>
          this.router.navigate(['/listarFormulario'])
  )}

  cancelar(){
      this.router.navigate(['/listarFormulario'])
  }
}
