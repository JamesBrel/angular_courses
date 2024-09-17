import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AddPokemonComponent } from './add-pokemon/add-pokemon.component';
import { BorderCardDirective } from './border-card.directive.js';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component.js';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component.js';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe.js';
import { PokemonService } from './pokemon.service.js';

const pokemonRoutes: Routes = [
  { path: 'edit/pokemon/:id', component: EditPokemonComponent },
  { path: 'pokemon/add', component: AddPokemonComponent },
  { path: 'pokemons', component: ListPokemonComponent },
  { path: 'pokemon/:id', component: DetailPokemonComponent },
];

@NgModule({
  declarations: [
    BorderCardDirective,
    PokemonTypeColorPipe,
    ListPokemonComponent,
    DetailPokemonComponent,
    PokemonFormComponent,
    EditPokemonComponent,
    AddPokemonComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule.forChild(pokemonRoutes)],

  providers: [PokemonService],
})
export class PokemonModule {}
