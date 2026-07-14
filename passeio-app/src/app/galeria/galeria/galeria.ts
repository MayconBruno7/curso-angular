import { Component, OnInit } from '@angular/core';
import { Lugar } from '../../lugares/lugar';
import { Categoria } from '../../categorias/categoria';
import { LugarService } from '../../lugares/lugar-service';
import { CategoriaService } from '../../categorias/categoria-service';

@Component({
  selector: 'app-galeria',
  standalone: false,
  templateUrl: './galeria.html',
  styleUrl: './galeria.scss',
})
export class Galeria implements OnInit {
  lugares: Lugar[] = [];
  todosLugares: Lugar[] = [];
  categoriasFiltro: Categoria[] = [];
  nomeFiltro: string = '';
  categoriaFiltro: string = '';

  constructor(
    private lugarService: LugarService,
    private categoriaService: CategoriaService,
  ) {}

  ngOnInit(): void {
    this.categoriaService.obterTodas().subscribe((categorias) => {
      this.categoriasFiltro = categorias;
    });

    this.lugarService.obterTodos().subscribe((lugares) => {
      this.todosLugares = lugares;
      this.lugares = lugares;
    });
  }

  getTotalEstrelas(lugar: Lugar): string {
    return '&#9733'.repeat(lugar.avaliacao || 0) + '&#9734'.repeat(5 - (lugar.avaliacao || 0));
  }

  filtrar() {
    const nomeFiltro = this.nomeFiltro.trim().toLowerCase();
    const categoriaFiltro = this.categoriaFiltro.trim().toLowerCase();
    const fonte = this.todosLugares.length > 0 ? this.todosLugares : this.lugares;

    this.lugares = fonte.filter((lugar) => {
      const atendeNome = !nomeFiltro || (lugar.nome?.toLowerCase() || '').includes(nomeFiltro);
      const atendeCategoria =
        !categoriaFiltro ||
        categoriaFiltro === '-1' ||
        (lugar.categoria?.toLowerCase() || '') === categoriaFiltro;

      return atendeNome && atendeCategoria;
    });
  }
}
