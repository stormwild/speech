import { Injectable } from '@angular/core';
import { Observable, from, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Speech } from '../models/speech';
import { SPEECHES } from '../mock/speeches';

@Injectable({
  providedIn: 'root'
})
export class SpeechService {
  private speeches: Speech[];

  constructor(private http: HttpClient) {
    if (!this.speeches) {
      this.speeches = SPEECHES;
    }
  }

  getSpeeches(): Observable<Speech[]> {
    return of(this.speeches);
  }

  saveSpeech(speech: Speech): Observable<Speech[]> {
    const index = this.speeches.findIndex(s => s.id === speech.id);
    this.speeches[index] = speech;
    return of(this.speeches);
  }

  deleteSpeech(speech: Speech): Observable<Speech[]> {
    const index = this.speeches.findIndex(s => s.id === speech.id);
    this.speeches.splice(index, 1);
    return of(this.speeches);
  }
}
