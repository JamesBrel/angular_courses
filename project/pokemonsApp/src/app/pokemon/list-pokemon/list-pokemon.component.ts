import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../interfaces/pokemon.js';
import { PokemonService } from '../pokemon.service.js';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
})
export class ListPokemonComponent implements OnInit {
  pokemonList: Pokemon[];

  constructor(private router: Router, private pokemonService: PokemonService) {}

  ngOnInit(): void {
    // this.pokemonList = this.pokemonService.getPokemonList();
    this.pokemonService
      .getPokemonList()
      .subscribe((pokemons) => (this.pokemonList = pokemons));
  }

  goToPokemonSelected(pokemon: Pokemon) {
    this.router.navigate(['pokemon', pokemon.id]);
  }
}
