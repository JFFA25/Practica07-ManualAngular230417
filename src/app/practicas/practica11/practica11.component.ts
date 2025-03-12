import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-practica11',
  imports: [NgOptimizedImage],
  template: `
    <p>Username: {{ username }}</p>
    <p>Preferred Framework:</p>
    <ul>
      <li>
        Static Image:
        <img ngSrc="../dashboard/assests/perfil-del-usuario.png" alt="Angular logo" width="32" height="32" />
      </li>
      <li>
        Dynamic Image:
        <img [ngSrc]="logoUrl" [alt]="logoAlt" width="32" height="32" />
      </li>
    </ul>
    <div class="image-container"> //Container div has 'position: "relative"'
      <img ngSrc="www.example.com/image.png" height="600" width="800" priority />
    </div>
  `,
  styleUrl: './practica11.component.css'
})
export class Practica11Component {
  logoUrl = '/assets/logo.svg';
  logoAlt = 'Angular logo';
  username = 'youngTech';
}
