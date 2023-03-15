import { Component, OnInit } from '@angular/core';
import { Formulario } from '../formulario';
import { FormularioService } from '../formulario.service';

@Component({
  selector: 'app-listar-formulario',
  templateUrl: './listar-formulario.component.html',
  styleUrls: ['./listar-formulario.component.css']
})
export class ListarFormularioComponent implements OnInit {

  listaFormularios: Formulario[] = [];

  constructor(private service: FormularioService){}

  ngOnInit(): void {
    this.service.listar().subscribe((listaFormularios) => {
      this.listaFormularios = listaFormularios
    })
  }

}
