import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { forkJoin, Observable, switchMap } from 'rxjs';
import { ArrayToCsvPipe } from 'src/app/shared/pipes/array-to-csv.pipe';
import { POKEMON_TABLE_PAGE_OFFSET, POKEMON_TABLE_PAGE_SIZE } from '../../pokemon.constant';
import { Pokemon } from '../../models/pokemon';
import { PokemonList } from '../../models/pokemon-list';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
  providers: [ArrayToCsvPipe]
})
export class PokemonComponent implements OnInit, AfterViewInit {

  pokemonList: Pokemon[] = [];

  // Table inits
  dataSource: MatTableDataSource<Pokemon> = new MatTableDataSource();
  displayedColumns: string[] = ['photo', 'id', 'name', 'type', 'height', 'weight'];
  resultsLength: number = 0;
  isLoadingResults: boolean = true;
  isRateLimitReached: boolean = false;

  // Pagination inits
  page: PageEvent = new PageEvent;
  pageIndex: number = POKEMON_TABLE_PAGE_OFFSET;
  pageSize = POKEMON_TABLE_PAGE_SIZE;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(private pokemonService: PokemonService) { }

  getPokemons(): void {
    this.isLoadingResults = true;
    this.pokemonService.getPokemonListRequest(this.pageIndex * this.pageSize, this.pageSize)
      .pipe(
        switchMap((list: PokemonList) => {
          this.resultsLength = list.count;
          const pokemonRequest: Observable<Pokemon>[] = [];
          for (const x of list.results) {
            const request: Observable<Pokemon> = this.pokemonService.getPokemonInfoRequest(x.url);
            pokemonRequest.push(request);
          }
          return forkJoin(pokemonRequest);
        })
      ).subscribe({
        next: (pokemonListData: Pokemon[]) => {
          this.pokemonList = pokemonListData;
          this.isLoadingResults = false;
        },
        error: (error: Error) => {
          console.log(error);
        }
      });
  }

  ngAfterViewInit(): void {
    this.paginator.page.subscribe(data => {
      this.pageIndex = data.pageIndex;
      this.pageSize = data.pageSize;
      this.getPokemons();
    });
  }

  ngOnInit(): void {
    this.getPokemons();
  }
}
