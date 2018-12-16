import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewSpeechesComponent } from './modules/speeches/view-speeches/view-speeches.component';
import { SubmitSpeechComponent } from './modules/speeches/submit-speech/submit-speech.component';
import { SearchSpeechesComponent } from './modules/speeches/search-speeches/search-speeches.component';
import { HomeComponent } from './modules/main/home/home.component';

const routes: Routes = [
  { path: 'view', component: ViewSpeechesComponent },
  { path: 'submit', component: SubmitSpeechComponent },
  { path: 'search', component: SearchSpeechesComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
