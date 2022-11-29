import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';

const routes: Routes = [
  { path: '', component: PokemonComponent },
  { path: ':id', component: PokemonDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }
