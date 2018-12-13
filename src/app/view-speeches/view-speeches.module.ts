import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeechesListComponent } from './speeches-list/speeches-list.component';

@NgModule({
  declarations: [SpeechesListComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SpeechesListComponent
  ]
})
export class ViewSpeechesModule { }
