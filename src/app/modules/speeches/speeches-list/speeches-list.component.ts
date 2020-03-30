import { Component, OnInit, Input, Output, OnChanges } from '@angular/core';
import { Speech } from 'src/app/models/speech';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-speeches-list',
  templateUrl: './speeches-list.component.html',
  styleUrls: ['./speeches-list.component.scss']
})
export class SpeechesListComponent implements OnInit {

  @Input() speeches: Speech[];
  @Output() change = new EventEmitter();

  current: Speech;

  constructor() { }

  ngOnInit() {
    this.current = this.speeches[0];
  }

  select(speech: Speech) {
    this.current = speech;
    this.change.emit(this.current);
    return false;
  }

  trackBySpeech(index: number, speech: Speech) {
    return speech.id;
  }
}
