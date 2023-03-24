import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarFormularioComponent } from './componentes/formulario/criar-formulario/criar-formulario.component';
import { EditarFormularioComponent } from './componentes/formulario/editar-formulario/editar-formulario.component';
import { ExcluirFormularioComponent } from './componentes/formulario/excluir-formulario/excluir-formulario.component';
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
  },
  {
    path:'formulario/excluirFormulario/:id',
    component: ExcluirFormularioComponent
  },
  {
    path:'formulario/editarFormulario/:id',
    component: EditarFormularioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
