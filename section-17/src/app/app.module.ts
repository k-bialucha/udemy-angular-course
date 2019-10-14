import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AbbreviationPipe } from './abbreviation.pipe';
import { FilterPipe } from './filter.pipe';
import { ReversePipe } from './reverse.pipe';

@NgModule({
  declarations: [AppComponent, AbbreviationPipe, FilterPipe, ReversePipe],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
