import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Movies } from 'src/app/models/movies';
import { MoviesService } from 'src/app/services/movies.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  movieId = '';
  movie!: Movies;
  imageURL = environment.imgURL;
  constructor(
    private movieService: MoviesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.movieId = params['id'];
      this.getMovieDetails(this.movieId);
    });
  }

  getMovieDetails(movieId: string | number) {
    this.movieService.getMovieDetails(movieId).subscribe((res: any) =>{ 
      this.movie = res;
      let path = `${this.imageURL}${res.backdrop_path}`;
      document.getElementById('background')!.style.backgroundImage = "url(" + path + ")";
    });
  }

}
