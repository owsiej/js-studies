import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Score, TokenValidation } from './score';

@Injectable({
  providedIn: 'root',
})
export class HighscoresService {
  constructor(private _http: HttpClient) {}

  public loadHighscores() {
    const headers = new HttpHeaders({
      Accept: 'application/json',
    });
    const url = 'https://scores.chrum.it/scores/snake';
    return this._http.get<Array<Score>>(url, { headers });
  }

  public postScore(userName: string, score: number, token: string) {
    const headers = new HttpHeaders({
      'auth-token': token,
      'Content-Type': 'application/json',
    });
    const scoreToPost = {
      name: userName,
      game: 'snake',
      score: score,
    };
    const url = 'https://scores.chrum.it/scores';
    return this._http.post(url, scoreToPost, { headers });
  }
  public checkToken(token: string) {
    const headers = new HttpHeaders({
      'auth-token': token,
    });
    const url = 'https://scores.chrum.it/check-token';
    return this._http.get<TokenValidation>(url, { headers });
  }
}
