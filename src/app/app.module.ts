import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavModule } from './modules/nav/nav.module';
import { ViewSpeechesModule } from './modules/view-speeches/view-speeches.module';
import { SpeechService } from './services/speech.service';
import { ViewSpeechesComponent } from './modules/view-speeches/view-speeches/view-speeches.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NavModule,
    ViewSpeechesModule
  ],
  providers: [
    SpeechService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
