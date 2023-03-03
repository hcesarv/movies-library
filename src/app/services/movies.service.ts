import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  apiKey = `api_key=${environment.api_key}`;
  constructor(private http: HttpClient) { }

  getPopularMovies(page?: number) {
    return this.http.get(`${environment.baseURL}/movie/popular?api_key=${environment.api_key}&page=${page}`);
  }

  getConfigurationAPI() {
    return this.http.get(`${environment.baseURL}/configuration?${this.apiKey}`);
  }

  getMovieDetails(movieId: string | number) {
    return this.http.get(`${environment.baseURL}/movie/${movieId}?${this.apiKey}`);
  }
}
