import { Component, OnInit, Input, OnChanges, ViewChild, ElementRef } from '@angular/core';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { CustomDateFormatterService } from 'src/app/providers/custom-date-formatter.service';
import { Speech } from 'src/app/models/speech';
import { FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { faPlus, faCalendar } from '@fortawesome/free-solid-svg-icons';

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
  @ViewChild('tag') tag: ElementRef;

  faPlus = faPlus;
  faCalendar = faCalendar;

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
        updated: this.dateService.parse(this.speech.updated),
        tags: this.speech.tags
      });
      console.log(this.speech);
    }
  }

  get tags() {
    return this.speech.tags || [];
  }

  get tagList() {
    return this.speechForm.get('tags') as FormArray;
  }

  addTag(tag: string) {
    this.speech.tags.push(tag);
    this.tag.nativeElement.value = '';
    return false;
  }

  trackByIndex(index: number, tag: string) {
    return index;
  }

  remove(i: number) {
    this.speech.tags.splice(i, 1);
    return false;
  }
}
