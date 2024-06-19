import { Component, OnInit } from '@angular/core';
import { Pokemon } from './interfaces/pokemon.js';
import { POKEMONS } from './mock-pokemons.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon | undefined;

  ngOnInit(): void {
    console.table(this.pokemonList);
  }

  onSelectPokemon(pokemonId: string) {
    let pokemon: Pokemon | undefined = this.pokemonList.find(
      (pokemon) => pokemon.id == +pokemonId
    );

    if (pokemon) {
      console.log(`vous avez demandé le pokemon ${pokemon.name}`);
      this.pokemonSelected = pokemon;
    } else {
      console.log(`vous avez demandé un pokemon qui n'existe pas.`);
    }
  }
}
