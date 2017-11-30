import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { MatListModule } from '@angular/material/list';

import { AppComponent } from './app.component';
import { RecorderService } from './recorder.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatListModule
  ],
  providers: [RecorderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
