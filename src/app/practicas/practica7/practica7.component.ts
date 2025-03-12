import { Component } from '@angular/core';

@Component({
  selector: 'app-practica7',
  templateUrl: './practica7.component.html',
  styleUrls: ['./practica7.component.css'] // Corregido: styleUrl -> styleUrls
})
export class Practica7Component {
  message = '';

  onMouseOver() {
    this.message = '¡Bien hecho 🚀!';
  }
  
  greet() {
    console.log('¡Hola 👋!');
  }
}