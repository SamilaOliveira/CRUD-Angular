import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarFormularioComponent } from './componentes/formulario/criar-formulario/criar-formulario.component';
import { ListarFormularioComponent } from './componentes/formulario/listar-formulario/listar-formulario.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'listarFormulario',
    pathMatch: 'full'
  },
  {
    path:'criarFormulario',
    component: CriarFormularioComponent
  },
  {
    path:'listarFormulario',
    component: ListarFormularioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
