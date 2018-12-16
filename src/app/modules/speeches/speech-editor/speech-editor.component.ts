import { Component, OnInit } from '@angular/core';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { CustomDateFormatterService } from 'src/app/providers/custom-date-formatter.service';

@Component({
  selector: 'app-speech-editor',
  templateUrl: './speech-editor.component.html',
  styleUrls: ['./speech-editor.component.scss'],
  providers: [
    { provide: NgbDateParserFormatter, useClass: CustomDateFormatterService }
  ]
})
export class SpeechEditorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
