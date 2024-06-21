import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  // pokemonList: Pokemon[] = POKEMONS;
  // pokemonSelected: Pokemon | undefined;
  // ngOnInit(): void {
  //   console.table(this.pokemonList);
  // }
  // onSelectPokemon(pokemonSelected: Pokemon | undefined) {
  //   let pokemon: Pokemon | undefined = pokemonSelected;
  //   //   this.pokemonList.find(
  //   //   (pokemon) => pokemon.id == +pokemonId
  //   // );
  //   if (pokemon) {
  //     console.log(`vous avez demandé le pokemon ${pokemon.name}`);
  //     this.pokemonSelected = pokemon;
  //   } else {
  //     console.log(`vous avez demandé un pokemon qui n'existe pas.`);
  //   }
  // }
}
