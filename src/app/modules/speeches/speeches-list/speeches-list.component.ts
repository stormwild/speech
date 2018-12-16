import { Component, OnInit } from '@angular/core';
import { SpeechService } from 'src/app/services/speech.service';
import { Speech } from 'src/app/models/speech';

@Component({
  selector: 'app-speeches-list',
  templateUrl: './speeches-list.component.html',
  styleUrls: ['./speeches-list.component.scss']
})
export class SpeechesListComponent implements OnInit {

  public speeches: Speech[] = [];

  constructor(private speechService: SpeechService) { }

  ngOnInit() {
    this.speechService.getSpeeches().subscribe(s => {
      this.speeches.push(s);
    });
  }

  edit($e) {
    console.log($e);
  }
}
