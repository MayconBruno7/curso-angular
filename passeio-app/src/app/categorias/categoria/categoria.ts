import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-categoria',
  standalone: false,
  templateUrl: './categoria.html',
  styleUrl: './categoria.scss',
})
export class Categoria {
  camposForm: FormGroup;

  constructor() {
    this.camposForm = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      descricao: new FormControl('', [Validators.required]),
    });
  }

  salvar() {
    if (this.camposForm.valid) {
      const categoria = this.camposForm.value;
      console.log('Categoria salva:', categoria);
    } else {
      console.log('Formulário inválido');
    }
  }
}
