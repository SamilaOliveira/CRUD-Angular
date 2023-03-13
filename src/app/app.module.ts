import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { CriarFormularioComponent } from './componentes/formulario/criar-formulario/criar-formulario.component';
import { FormsModule } from '@angular/forms';
import { ListarFormularioComponent } from './componentes/formulario/listar-formulario/listar-formulario.component';
import { FormularioComponent } from './componetes/pensamentos/formulario/formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    CriarFormularioComponent,
    ListarFormularioComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
