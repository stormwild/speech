import { Component, OnInit, Input, Output } from '@angular/core';
import { Speech } from 'src/app/models/speech';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-speeches-list',
  templateUrl: './speeches-list.component.html',
  styleUrls: ['./speeches-list.component.scss']
})
export class SpeechesListComponent implements OnInit {

  @Input() public speeches: Speech[];
  @Output() public change = new EventEmitter();
  public current: Speech;

  constructor() { }

  ngOnInit() {
    this.current = this.speeches[0];
  }

  edit(speech: Speech) {
    this.change.emit(speech);
    this.current = speech;
    return false;
  }

  trackBySpeech(index: number, speech: Speech) {
    return speech.id;
  }
}
