import { Component, OnInit, Input, OnChanges, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { CustomDateFormatterService } from 'src/app/providers/custom-date-formatter.service';
import { Speech } from 'src/app/models/speech';
import { FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { faPlus, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { getAllRouteGuards } from '@angular/router/src/utils/preactivation';

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
  @Output() public save = new EventEmitter();
  @Output() public delete = new EventEmitter();

  @ViewChild('tag') tag: ElementRef;

  faPlus = faPlus;
  faCalendar = faCalendar;

  speechForm = this.fb.group({
    content: ['', Validators.required],
    author: ['', Validators.required],
    tags: this.fb.array([]),
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
        tags: this.initTags(this.speech.tags)
      });
    }
  }

  get content() {
    return this.speechForm.get('content');
  }

  get author() {
    return this.speechForm.get('author');
  }

  get updated() {
    return this.speechForm.get('updated');
  }

  get tags() {
    return this.speechForm.get('tags') as FormArray;
  }

  initTags(tags: string[]): string[] {
    this.speechForm.setControl('tags', this.fb.array([]));
    for (let index = 0; index < tags.length; index++) {
      this.tags.push(this.fb.control(tags[index]));
    }
    return tags;
  }

  addTag(tag: string) {
    let containsTag = false;
    for (let index = 0; index < this.tags.length; index++) {
      if (this.tags.at(index).value === tag) {
        containsTag = true;
      }
    }

    if (containsTag === false) {
      this.tags.push(this.fb.control(tag));
    }
    this.tag.nativeElement.value = '';
    return false;
  }

  trackByIndex(index: number, tag: string) {
    return index;
  }

  remove(i: number) {
    this.tags.removeAt(i);
    return false;
  }

  onSubmit($e) {
    $e.preventDefault();
    if (this.speechForm.valid) {
      const speech: Speech = {
        id: this.speech.id,
        title: this.speech.title,
        content: this.content.value,
        author: this.author.value,
        tags: this.tags.value,
        updated: this.dateService.format(this.updated.value)
      };
      this.save.emit(speech);
    }
  }

  onDelete() {
    this.delete.emit(this.speechForm.value);
  }
}
