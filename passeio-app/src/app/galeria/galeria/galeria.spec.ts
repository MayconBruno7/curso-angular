import { describe, it, expect, beforeEach, vi } from 'vitest';
import { Galeria } from './galeria';
import { LugarService } from '../../lugares/lugar-service';
import { CategoriaService } from '../../categorias/categoria-service';

describe('Galeria', () => {
  let component: Galeria;
  let lugarService: { obterTodos: ReturnType<typeof vi.fn>; filtrar: ReturnType<typeof vi.fn> };
  let categoriaService: { obterTodas: ReturnType<typeof vi.fn> };

  beforeEach(() => {
    lugarService = {
      obterTodos: vi.fn(),
      filtrar: vi.fn(),
    };
    categoriaService = {
      obterTodas: vi.fn(),
    };

    component = new Galeria(
      lugarService as unknown as LugarService,
      categoriaService as unknown as CategoriaService,
    );
  });

  it('deve filtrar os lugares pelo nome e pela categoria', () => {
    component.todosLugares = [
      {
        nome: 'Praia do Forte',
        categoria: 'Praias',
        localizacao: 'Recife',
        urlFoto: '',
        avaliacao: 5,
        id: '1',
      } as any,
      {
        nome: 'Museu do Amanhã',
        categoria: 'Museus',
        localizacao: 'Rio',
        urlFoto: '',
        avaliacao: 4,
        id: '2',
      } as any,
    ];

    component.nomeFiltro = 'praia';
    component.categoriaFiltro = 'Praias';

    component.filtrar();

    expect(component.lugares.length).toBe(1);
    expect(component.lugares[0].nome).toBe('Praia do Forte');
  });
});
