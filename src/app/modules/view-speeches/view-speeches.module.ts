import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeechesListComponent } from './speeches-list/speeches-list.component';
import { ViewSpeechesComponent } from './view-speeches/view-speeches.component';

@NgModule({
  declarations: [SpeechesListComponent, ViewSpeechesComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SpeechesListComponent,
    ViewSpeechesComponent
  ]
})
export class ViewSpeechesModule { }
