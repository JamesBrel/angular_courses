import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../interfaces/pokemon.js';

@Component({
  selector: 'app-add-pokemon',
  templateUrl: './add-pokemon.component.html',
  styleUrl: './add-pokemon.component.css',
})
export class AddPokemonComponent implements OnInit {
  pokemon: Pokemon;

  ngOnInit(): void {
    this.pokemon = new Pokemon();
  }
}
