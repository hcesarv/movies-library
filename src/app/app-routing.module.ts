import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { MoviesComponent } from './components/movies/movies.component';
import { AutocompleteComponent,  } from './teste/teste.component';

const routes: Routes = [
  {
    path: 'movies',
    component: MoviesComponent
  },
  {
    path: 'teste',
    component: AutocompleteComponent
  },
  {
    path: 'movies/:id',
    component: DetailsComponent
  },
  {
    path: '**',
    redirectTo: 'movies'
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
