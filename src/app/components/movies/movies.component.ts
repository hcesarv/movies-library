import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movies, MoviesAPIResponse } from 'src/app/models/movies';
import { MoviesService } from 'src/app/services/movies.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies: Array<Movies> = [];
  imageURL = environment.imgURL;
  page = 1;
  constructor(
    private movieService: MoviesService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.movieService.getConfigurationAPI().subscribe()
    this.movieService.getPopularMovies().subscribe((res: any)=> this.movies = res.results)
  }

  loadMore() {
    this.movieService.getPopularMovies(this.page).subscribe((res: any) => this.movies = this.movies.concat(res.results));
  }

  openMovieDetails(movieId: number) {
    this.router.navigateByUrl(`/movies/${movieId}`);
  }
}
