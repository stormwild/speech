import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavModule } from './modules/nav/nav.module';
import { SpeechService } from './services/speech.service';
import { SpeechesModule } from './modules/speeches/speeches.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainModule } from './modules/main/main.module';
import { CustomDateFormatterService } from './providers/custom-date-formatter.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    ToastrModule.forRoot(),
    NavModule,
    MainModule,
    SpeechesModule,
    NgbModule
  ],
  providers: [
    SpeechService,
    CustomDateFormatterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
