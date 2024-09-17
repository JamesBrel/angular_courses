import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../interfaces/pokemon.js';
import { PokemonService } from '../pokemon.service.js';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
})
export class DetailPokemonComponent implements OnInit {
  public pokemonList: Pokemon[];
  public pokemon: Pokemon | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokemonService: PokemonService
  ) {}
  ngOnInit(): void {
    const pokemonId: string | null = this.route.snapshot.paramMap.get('id');
    if (pokemonId) {
      // this.pokemon = this.pokemonService.getPokemonById(+pokemonId);

      this.pokemonService
        .getPokemonById(+pokemonId)
        .subscribe((onePokemon) => (this.pokemon = onePokemon));
    }
  }

  /**
   * deletePokemon
   */
  public goToDeletePokemon(pokemon: Pokemon) {
    this.pokemonService
      .deletePokemonById(pokemon.id)
      .subscribe(() => this.goToPokemonList());
  }

  /**
   * goToEditPokemon
   */
  public goToEditPokemon(pokemon: Pokemon) {
    this.router.navigate(['edit/pokemon', pokemon.id]);
  }

  /**
   * goToPokemonList
   */
  public goToPokemonList() {
    this.router.navigate(['pokemons']);
  }
}
