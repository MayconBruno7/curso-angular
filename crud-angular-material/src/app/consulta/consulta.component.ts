import { Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../cadastro/cliente';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { query } from '@angular/animations';

@Component({
  selector: 'app-consulta',
  imports: [
    MatInputModule,
    MatCardModule,
    FlexLayoutModule,
    MatIconModule,
    FormsModule,
    MatTableModule,
    MatButtonModule,
    CommonModule,
  ],
  templateUrl: './consulta.component.html',
  styleUrl: './consulta.component.scss',
})
export class ConsultaComponent {
  nomeBusca: string = '';
  listaClientes: Cliente[] = [];
  colunasTable: string[] = [
    'id',
    'nome',
    'email',
    'cpf',
    'dataNascimento',
    'acoes',
  ];
  constructor(
    private service: ClienteService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.listaClientes = this.service.pesquisarClientes('');
  }

  pesquisar() {
    this.listaClientes = this.service.pesquisarClientes(this.nomeBusca);
  }

  preparaEditar(id: string) {
    this.router.navigate(['cadastro'], { queryParams: { id } });
  }
  preparaDeletar(cliente: Cliente) {
    cliente.deletando = true;
  }

  deletar(cliente: Cliente) {
    this.service.deletar(cliente);
    this.listaClientes = this.service.pesquisarClientes('');
  }
}
