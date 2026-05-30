import { Injectable } from '@angular/core';
import { Cliente } from './cadastro/cliente';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  static REPO_CLIENTES = '_CLIENTES';

  constructor() {}

  salvar(cliente: Cliente) {
    const storage = this.obterStorage();

    storage.push(cliente);
    localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(storage));
  }

  pesquisarClientes(nomeBusca: string): Cliente[] {
    const clientes = this.obterStorage();
    if (!nomeBusca) {
      return clientes;
    }

    return clientes.filter((cliente) =>
      cliente.nome?.toLowerCase().includes(nomeBusca.toLowerCase()),
    );
  }

  private obterStorage(): Cliente[] {
    const respositorioClientes = localStorage.getItem(
      ClienteService.REPO_CLIENTES,
    );

    if (respositorioClientes) {
      const clientes: Cliente[] = JSON.parse(respositorioClientes);
      return clientes;
    }

    const clientes: Cliente[] = [];
    localStorage.setItem(
      ClienteService.REPO_CLIENTES,
      JSON.stringify(clientes || '[]'),
    );
    return clientes;
  }
}
