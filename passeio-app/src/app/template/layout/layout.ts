import { Component, OnInit } from '@angular/core';
import { LayoutProps } from './layoutprops';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout implements OnInit {
  props: LayoutProps = {
    titulo: '',
    subtitulo: '',
  };

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter(() => this.activatedRoute.firstChild !== null),
        map(() => this.obterPropriedadesLayout()),
      )
      .subscribe((props: LayoutProps) => {
        this.props = props;
      });
  }

  obterPropriedadesLayout(): LayoutProps {
    let rotaFilha = this.activatedRoute.snapshot.firstChild;
    while (rotaFilha?.firstChild) {
      rotaFilha = rotaFilha.firstChild;
    }

    return rotaFilha?.data as LayoutProps;
  }
}
