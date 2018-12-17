import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { CustomDateFormatterService } from 'src/app/providers/custom-date-formatter.service';
import { Speech } from 'src/app/models/speech';
import { FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-speech-editor',
  templateUrl: './speech-editor.component.html',
  styleUrls: ['./speech-editor.component.scss'],
  providers: [
    { provide: NgbDateParserFormatter, useClass: CustomDateFormatterService }
  ]
})
export class SpeechEditorComponent implements OnInit, OnChanges {
  @Input() public speech: Speech;

  speechForm = this.fb.group({
    content: ['', Validators.required],
    author: ['', Validators.required],
    tags: this.fb.array([
      this.fb.control('')
    ]),
    updated: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private dateService: CustomDateFormatterService) { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.speech) {
      this.speechForm.patchValue({
        content: this.speech.content,
        author: this.speech.author,
        updated: this.dateService.parse(this.speech.updated)
      });
      console.log(this.speech);
    }
  }

  get tags() {
    return this.speechForm.get('tags') as FormArray;
  }

  addTags() {
    this.tags.push(this.fb.control(''));
  }
}
