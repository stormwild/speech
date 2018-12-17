import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeechesListComponent } from './speeches-list/speeches-list.component';
import { ViewSpeechesComponent } from './view-speeches/view-speeches.component';
import { SpeechEditorComponent } from './speech-editor/speech-editor.component';
import { SubmitSpeechComponent } from './submit-speech/submit-speech.component';
import { SearchSpeechesComponent } from './search-speeches/search-speeches.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ShareModalComponent } from './share-modal/share-modal.component';

@NgModule({
  declarations: [
    SpeechesListComponent,
    ViewSpeechesComponent,
    SpeechEditorComponent,
    SubmitSpeechComponent,
    SearchSpeechesComponent,
    ShareModalComponent
  ],
  imports: [CommonModule, NgbModule, ReactiveFormsModule, FontAwesomeModule],
  exports: [SpeechesListComponent, ViewSpeechesComponent]
})
export class SpeechesModule {}
