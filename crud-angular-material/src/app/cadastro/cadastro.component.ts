import { Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { Cliente } from './cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cadastro',
  imports: [
    FlexLayoutModule, 
    MatCardModule, 
    FormsModule, 
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})

export class CadastroComponent {
  cliente: Cliente = Cliente.newCliente();

  constructor(private service: ClienteService){}

  salvar() {
    this.service.salvar(this.cliente);
  }
}
