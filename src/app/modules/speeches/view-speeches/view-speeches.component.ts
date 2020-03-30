import { Component, OnInit } from '@angular/core';
import { SpeechService } from 'src/app/services/speech.service';
import { Speech } from 'src/app/models/speech';

@Component({
  selector: 'app-view-speeches',
  templateUrl: './view-speeches.component.html',
  styleUrls: ['./view-speeches.component.scss']
})
export class ViewSpeechesComponent implements OnInit {

  public speeches: Speech[] = [];
  public speech: Speech;

  constructor(private speechService: SpeechService) { }

  ngOnInit() {
    this.speechService.getSpeeches().subscribe(s => {
      this.speeches = s;
      this.speech = this.speeches[0];
    });
  }

  onChange(speech: Speech) {
    this.speech = this.speeches[this.speeches.findIndex(s => s.id === speech.id)];
  }

  onSave(speech: Speech) {
    this.speechService.saveSpeech(speech).subscribe(s => {
      this.speeches = s;
      this.speech = speech;
    });
  }

  onDelete(speech: Speech) {
    this.speechService.deleteSpeech(speech).subscribe(s => {
      this.speeches = s;
      this.speech = this.speeches[0];
    });
  }
}
