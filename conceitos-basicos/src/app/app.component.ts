import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloworldComponent } from './helloworld/helloworld.component';

@Component({
  selector: 'app-root',
  imports: [HelloworldComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'conceitos-basicos';
}
