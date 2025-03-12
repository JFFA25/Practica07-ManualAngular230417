import { Component } from '@angular/core';

@Component({
  selector: 'app-practica5',
  imports: [],
  templateUrl: './practica5.component.html',
  styleUrls: ['./practica5.component.css'] // Corregido: styleUrl -> styleUrls
})
export class Practica5Component {
  operatingSystems = [{id: 'win', name: 'Windows'}, {id: 'osx', name: 'MacOS'}, {id: 'linux', name: 'Linux'}];
  users = [
    {id: 0, name: 'Jorge Siddhartha'},
    {id: 1, name: 'Luis Humberto'},
    {id: 2, name: 'Leon Larregui'}
  ];
}
