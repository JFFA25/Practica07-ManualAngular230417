import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-practica8',
  imports: [],
  templateUrl: './practica8.component.html',
  styleUrl: './practica8.component.css'
})
export class Practica8Component {
  @Input() occupation = 'Escuchar Enjambre';
  @Input() name = 'Yo';
}
