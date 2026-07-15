import { Component, OnInit, signal } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class App implements OnInit {
  ngOnInit(): void {
    const dados = [
      { categoria: 'Eletrônicos', valor: 11 },
      { categoria: 'Roupas', valor: 22 },
      { categoria: 'Decoração', valor: 33 },
      { categoria: 'Ferramentas', valor: 44 },
      { categoria: 'Acessorios', valor: 55 },
    ];

    const labels = dados.map((d) => d.categoria);
    const valores = dados.map((d) => d.valor);
    new Chart('barChart', {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Categorias Mais Vendidas',
            data: valores,
            backgroundColor: 'rgba(31, 82, 146, 0.6)',
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

  protected readonly title = signal('grafico');
}
