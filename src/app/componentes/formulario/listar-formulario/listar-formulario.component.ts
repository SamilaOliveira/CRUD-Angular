import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-formulario',
  templateUrl: './listar-formulario.component.html',
  styleUrls: ['./listar-formulario.component.css']
})
export class ListarFormularioComponent implements OnInit {

  listaFormularios = [
    {
      nome: 'gasdasdasdasda',
      email: 'samilacampelo@gmail.com',
      modelo: 'modelo1'
    }
  ];

  constructor(){}

  ngOnInit(): void {

  }

}
