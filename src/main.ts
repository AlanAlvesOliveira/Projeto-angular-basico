import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter, RouterModule, Routes } from '@angular/router';
import { CriarPensamentoComponent } from './app/componentes/pensamentos/criar-pensamento/criar-pensamento.component';
import { ListarPensamentoComponent } from './app/componentes/pensamentos/listar-pensamento/listar-pensamento.component';
import { importProvidersFrom } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { ExcluirPensamentoComponent } from './app/componentes/pensamentos/excluir-pensamento/excluir-pensamento.component';

const routes: Routes = [
  { path: '', redirectTo: 'listarPensamento', pathMatch: 'full' },
  { path: 'criarPensamento', component: CriarPensamentoComponent },
  { path: 'listarPensamento', component: ListarPensamentoComponent },
  { path: 'pensamentos/excluirPensamento/:id', component: ExcluirPensamentoComponent }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), provideHttpClient()

  ],
}).catch(err => console.error(err));
