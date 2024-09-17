import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../interfaces/pokemon.js';
import { PokemonService } from '../pokemon.service.js';

@Component({
  selector: 'app-edit-pokemon',
  templateUrl: './edit-pokemon.component.html',
  styleUrl: './edit-pokemon.component.css',
})
export class EditPokemonComponent implements OnInit {
  pokemon: Pokemon | undefined;
  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    let pokemonId: string | null = this.route.snapshot.paramMap.get('id');

    if (pokemonId) {
      // this.pokemon = this.pokemonService.getPokemonById(+pokemonId);
      this.pokemonService
        .getPokemonById(+pokemonId)
        .subscribe((onePokemon) => (this.pokemon = onePokemon));
    } else {
      this.pokemon = undefined;
    }
  }
}
