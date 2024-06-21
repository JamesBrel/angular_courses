import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../interfaces/pokemon.js';
import { POKEMONS } from '../mock-pokemons.js';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
})
export class DetailPokemonComponent implements OnInit {
  public pokemonList: Pokemon[];
  public pokemon: Pokemon | undefined;

  constructor(private route: ActivatedRoute, private router: Router) {}
  ngOnInit(): void {
    this.pokemonList = POKEMONS;
    const pokemonId: string | null = this.route.snapshot.paramMap.get('id');
    if (pokemonId) {
      this.pokemon = this.pokemonList.find(
        (pokemon) => pokemon.id == +pokemonId
      );
    }
  }

  /**
   * goToPokemonList
   */
  public goToPokemonList() {
    this.router.navigate(['pokemons']);
  }
}
