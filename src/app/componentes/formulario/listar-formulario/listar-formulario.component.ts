import { Component, OnInit } from '@angular/core';
import { Formulario } from '../formulario';

@Component({
  selector: 'app-listar-formulario',
  templateUrl: './listar-formulario.component.html',
  styleUrls: ['./listar-formulario.component.css']
})
export class ListarFormularioComponent implements OnInit {

  listaFormularios: Formulario[] = [];

  constructor(){}

  ngOnInit(): void {

  }

}
