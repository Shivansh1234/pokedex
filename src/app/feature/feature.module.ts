import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';

// Material Imports
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'

import { PokemonComponent } from './components/pokemon/pokemon.component';
import { SharedModule } from '../shared/shared.module';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';


@NgModule({
  declarations: [
    PokemonComponent,
    PokemonDetailsComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    SharedModule,

    // Material Imports
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ]
})
export class FeatureModule { }
