import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PensamentoComponent } from '../pensamento/pensamento.component';
import {NgFor,NgIf} from '@angular/common'



@Component({
  selector: 'app-listar-pensamento',
  standalone: true,
  imports: [RouterLink, PensamentoComponent,NgFor,NgIf],
  templateUrl: './listar-pensamento.component.html',
  styleUrl: './listar-pensamento.component.css'
})
export class ListarPensamentoComponent {

  listaPensamentos = [{
    conteudo: 'I love Angular',
    autoria: 'Nay',
    modelo: 'modelo3'
  },{
    conteudo: 'I love Angular I love Angula ',
    autoria: 'Nay',
    modelo: 'modelo3'
  }];

}
