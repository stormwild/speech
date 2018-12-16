import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeechesListComponent } from './speeches-list/speeches-list.component';
import { ViewSpeechesComponent } from './view-speeches/view-speeches.component';
import { SpeechEditorComponent } from './speech-editor/speech-editor.component';
import { SubmitSpeechComponent } from './submit-speech/submit-speech.component';
import { SearchSpeechesComponent } from './search-speeches/search-speeches.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    SpeechesListComponent,
    ViewSpeechesComponent,
    SpeechEditorComponent,
    SubmitSpeechComponent,
    SearchSpeechesComponent
  ],
  imports: [CommonModule, NgbModule ],
  exports: [SpeechesListComponent, ViewSpeechesComponent]
})
export class SpeechesModule {}
