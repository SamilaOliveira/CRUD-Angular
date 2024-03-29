import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { CriarFormularioComponent } from './componentes/formulario/criar-formulario/criar-formulario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListarFormularioComponent } from './componentes/formulario/listar-formulario/listar-formulario.component';
import { FormularioComponent } from './componetes/formularios/formulario/formulario.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ExcluirFormularioComponent } from './componentes/formulario/excluir-formulario/excluir-formulario.component';
import { EditarFormularioComponent } from './componentes/formulario/editar-formulario/editar-formulario.component';

@NgModule ({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    CriarFormularioComponent,
    ListarFormularioComponent,
    FormularioComponent,
    ExcluirFormularioComponent,
    EditarFormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
