import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BorderCardDirective } from './border-card.directive.js';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component.js';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component.js';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe.js';

const pokemonRoutes: Routes = [
  { path: 'pokemons', component: ListPokemonComponent },
  { path: 'pokemon/:id', component: DetailPokemonComponent },
];

@NgModule({
  declarations: [
    BorderCardDirective,
    PokemonTypeColorPipe,
    ListPokemonComponent,
    DetailPokemonComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(pokemonRoutes)],
})
export class PokemonModule {}
