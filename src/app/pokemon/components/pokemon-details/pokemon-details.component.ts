import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { Pokemon } from '../../models/pokemon';
import { POKEMON_LIST } from '../../pokemon.constant';
import { PokemonService } from '../../services/pokemon.service';

import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { HttpErrorResponse } from '@angular/common/http';
import { DialogConfigService } from 'src/app/shared/services/dialog-config.service';
import { DialogResultData } from 'src/app/shared/models/dialog-result-data';

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
    private router: Router,
    private dialogConfigService: DialogConfigService,
    public dialog: MatDialog
  ) { }

  getPokemonDetails(): void {
    this.isLoadingResults = true;
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
            .subscribe((dialogResultData: DialogResultData) => {
              if (dialogResultData.success) {
                this.router.navigate(['pokemon']);
              }
            });
        }
      });
  }

  ngOnInit(): void {
    this.getPokemonDetails();
  }

}
