import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Pokemon } from './interfaces/pokemon.js';

@Injectable()
export class PokemonService {
  constructor(private http: HttpClient) {}
  /**
   * getPokemonList
   */
  public getPokemonList(): Observable<Pokemon[]> {
    // this use the http operations "GET"

    return this.http.get<Pokemon[]>('api/pokemons').pipe(
      tap((pokemonList) => this.log(pokemonList)),
      catchError((error) => this.handleError(error, []))
    );
    // return POKEMONS;
  }

  /**
   * getPokemonById
   */
  public getPokemonById(pokemonId: number): Observable<Pokemon | undefined> {
    // this use the http operations "GET ONE"

    return this.http.get<Pokemon>(`api/pokemons/${pokemonId}`).pipe(
      tap((pokemon) => this.log(pokemon)),
      catchError((error) => this.handleError(error, undefined))
    );

    // return POKEMONS.find((pokemon) => pokemon.id === pokemonId);
  }

  /**
   * updatePokemon
   */
  public updatePokemon(pokemon: Pokemon): Observable<null> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.put('api/pokemons', pokemon, httpOptions).pipe(
      tap((pokemon) => this.log(pokemon)),
      catchError((error) => this.handleError(error, null))
    );
  }

  /**
   * deletePokemon
   */
  public deletePokemonById(pokemonId: number): Observable<null> {
    return this.http.delete(`api/pokemons/${pokemonId}`).pipe(
      tap((pokemon) => this.log(pokemon)),
      catchError((error) => this.handleError(error, null))
    );
  }

  /**
   * addPokemon
   */
  public addPokemon(pokemon: Pokemon): Observable<Pokemon> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.post<Pokemon>('api/pokemons', pokemon, httpOptions).pipe(
      tap((pokemon) => this.log(pokemon)),
      catchError((error) => this.handleError(error, null))
    );
  }

  private log(response: any) {
    console.table(response);
  }

  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  }

  /**
   * getPokemonTypeList
   */
  public getPokemonTypeList(): string[] {
    return [
      'Plante',
      'Feu',
      'Eau',
      'Insecte',
      'Normal',
      'Electrik',
      'Poisson',
      'Fée',
      'Vol',
      'Combat',
      'Psy',
    ];
  }
}
