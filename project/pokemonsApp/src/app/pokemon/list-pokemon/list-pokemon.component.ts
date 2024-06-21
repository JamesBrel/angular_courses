import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../interfaces/pokemon.js';
import { POKEMONS } from '../mock-pokemons.js';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
})
export class ListPokemonComponent {
  pokemonList: Pokemon[] = POKEMONS;

  constructor(private router: Router) {}

  goToPokemonSelected(pokemon: Pokemon) {
    this.router.navigate(['pokemon', pokemon.id]);
  }
}
