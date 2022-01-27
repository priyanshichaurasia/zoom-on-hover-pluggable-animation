import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ZoomhoverDirective } from './zoomhover.directive';

@NgModule({
  declarations: [
    AppComponent,
    ZoomhoverDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
