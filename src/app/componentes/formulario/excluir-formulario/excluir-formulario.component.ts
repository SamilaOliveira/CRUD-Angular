import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formulario } from '../formulario';
import { FormularioService } from '../formulario.service';

@Component({
  selector: 'app-excluir-formulario',
  templateUrl: './excluir-formulario.component.html',
  styleUrls: ['./excluir-formulario.component.css']
})
export class ExcluirFormularioComponent implements OnInit {

  formulario: Formulario = {
    id: 0,
    nome: '',
    email: '',
    modelo: ''
  }

  constructor(
    private service: FormularioService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id')
      this.service.buscarPorId(parseInt(id!)).subscribe((formulario) => {
        this.formulario = formulario
      })
    }

    excluirFormulario() {
      if(this.formulario.id) {
        this.service.excluir(this.formulario.id).subscribe(() => {
          this.router.navigate(['/listarFormulario'])
        })
      }
    }

}
