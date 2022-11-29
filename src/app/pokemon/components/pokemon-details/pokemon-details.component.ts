import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { Pokemon } from '../../models/pokemon';
import { POKEMON_LIST } from '../../pokemon.constant';
import { PokemonService } from '../../services/pokemon.service';

import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { HttpErrorResponse } from '@angular/common/http';
import { DialogConfigService } from 'src/app/shared/services/dialog-config.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {

  pokemon: Pokemon = {} as Pokemon;
  isLoadingResults = true;

  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute,
    private dialogConfigService: DialogConfigService,
    public dialog: MatDialog
  ) { }

  getPokemonDetails(): void {
    const id: string | null = this.route.snapshot.paramMap.get('id');
    this.pokemonService.getPokemonInfoRequest(`${POKEMON_LIST}${id}`)
      .pipe(
        finalize(() => {
          this.isLoadingResults = false;
        })
      )
      .subscribe({
        next: (pokemonData: Pokemon) => {
          this.pokemon = pokemonData;
        },
        error: (error: HttpErrorResponse) => {
          const dialogRef = this.dialog.open(ErrorDialogComponent, this.dialogConfigService.getErrorDialogConfig(error, 'Pokemon Error'));
          dialogRef.afterClosed()
          .subscribe(data => {
            console.log(data);
          });
        }
      });
  }

  ngOnInit(): void {
    this.getPokemonDetails();
  }

}
