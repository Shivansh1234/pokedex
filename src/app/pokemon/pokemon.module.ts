import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';

// Material Imports
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { PokemonComponent } from './components/pokemon/pokemon.component';
import { SharedModule } from '../shared/shared.module';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';
import { PokemonTypeToArrayPipe } from './pipes/pokemon-type-to-array.pipe';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    PokemonComponent,
    PokemonDetailsComponent,
    PokemonTypeToArrayPipe
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    SharedModule,

    // Material Imports
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatDialogModule
  ]
})
export class PokemonModule { }
