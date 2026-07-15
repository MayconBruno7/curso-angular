import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

interface Produto {
  nome: string;
  valor: number;
  imagem: string;
}

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  produtos: Produto[] = [
    {
      nome: 'Produto 1',
      valor: 10.99,
      imagem: 'https://via.placeholder.com/150',
    },
    {
      nome: 'Produto 2',
      valor: 19.99,
      imagem: 'https://via.placeholder.com/150',
    },
    {
      nome: 'Produto 3',
      valor: 5.99,
      imagem: 'https://via.placeholder.com/150',
    },
  ];
  protected readonly title = signal('produtos');
}
