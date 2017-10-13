import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HotelGridComponent } from './hotel/hotel-grid/hotel-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    HotelGridComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
