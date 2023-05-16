import { Component } from '@angular/core';
import { Personaje } from '../../interfaces/personajes.inteface';

@Component({
  selector: 'app-dbz-main-pages',
  templateUrl: './main-pages.component.html',
  styleUrls: ['./main-pages.component.css']
})
export class MainPagesComponent {
  public personajes : Personaje [] = [
    {nombre : "Goku", poder : 20000}
  ];

  public obtenerNuevoPersonaje(personaje : Personaje) : void{
    console.log(personaje);
  }
}
