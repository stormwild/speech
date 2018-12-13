import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavModule } from './nav/nav.module';
import { ViewSpeechesModule } from './view-speeches/view-speeches.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavModule,
    ViewSpeechesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
