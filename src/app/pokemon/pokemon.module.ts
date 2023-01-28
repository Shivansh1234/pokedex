import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';

// Material Imports
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';

import { PokemonComponent } from './components/pokemon/pokemon.component';
import { SharedModule } from '../shared/shared.module';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';
import { PokemonTypeToArrayPipe } from './pipes/pokemon-type-to-array.pipe';


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
    MatDialogModule,
    MatCardModule
  ]
})
export class PokemonModule { }
