import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Speech } from '../models/speech';
import { SPEECHES } from '../mock/speeches';

@Injectable({
  providedIn: 'root'
})
export class SpeechService {

  constructor(private http: HttpClient) { }

  getSpeeches(): Observable<Speech> {
    return from(SPEECHES);
  }
}
