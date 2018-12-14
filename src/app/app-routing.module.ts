import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpeechesListComponent } from './modules/view-speeches/speeches-list/speeches-list.component';
import { AppComponent } from './app.component';
import { ViewSpeechesComponent } from './modules/view-speeches/view-speeches/view-speeches.component';

const routes: Routes = [
  { path: 'speeches', component: ViewSpeechesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
