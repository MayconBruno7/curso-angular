import { Component, inject } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Cliente } from './cliente';
import { ClienteService } from '../cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { BrasilapiService } from '../brasilapi.service';
import { Estado, Municipio } from '../brasilapi.models';

@Component({
  selector: 'app-cadastro',
  imports: [
    FlexLayoutModule,
    MatCardModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    CommonModule,
    NgxMaskDirective,
    MatSelectModule,
  ],
  providers: [provideNgxMask()],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss',
})
export class CadastroComponent {
  cliente: Cliente = Cliente.newCliente();
  atualizando: boolean = false;
  snackBar: MatSnackBar = inject(MatSnackBar);
  estados: Estado[] = [];
  municipios: Municipio[] = [];

  constructor(
    private service: ClienteService,
    private route: ActivatedRoute,
    private router: Router,
    private brasilapiService: BrasilapiService,
  ) {}

  ngOnInit() {
    this.route.queryParamMap.subscribe((query: any) => {
      const params = query['params'];
      const id = params['id'];
      if (id) {
        const clienteEncontrado = this.service.buscarClientePorId(id);
        if (clienteEncontrado) {
          this.atualizando = true;
          this.cliente = clienteEncontrado;

          if (this.cliente.sigla) {
            this.carregarMunicipios({
              value: this.cliente.sigla,
            } as MatSelectChange);
          }
        }
      }
    });
    this.carregarUFs();
  }

  carregarUFs() {
    this.brasilapiService.listarUFs().subscribe({
      next: (listaEstados) => (this.estados = listaEstados),
      error: (error) => console.error('Erro ao carregar estados:', error),
      // this.estados = estados;
    });
  }

  carregarMunicipios(event: MatSelectChange) {
    const ufSelecionada = event.value;
    this.brasilapiService.listarMunicipiosPorUF(ufSelecionada).subscribe({
      next: (municipios) => (this.municipios = municipios),
      error: (error) => console.error('Erro ao carregar municipios:', error),
    });
  }

  salvar() {
    if (!this.atualizando) {
      this.service.salvar(this.cliente);
      this.cliente = Cliente.newCliente();

      this.mostrarMensagem('Cliente salvo com sucesso!');
    } else {
      this.service.atualizar(this.cliente);
      this.router.navigate(['consulta']);
      this.mostrarMensagem('Cliente atualizado com sucesso!');
    }
  }

  mostrarMensagem(mensagem: string) {
    this.snackBar.open(mensagem, 'Ok', {
      duration: 3000,
    });
  }
}
