import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HomeComponent } from './home/home.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MatToolbarModule ],
  declarations: [ AppComponent, ToolbarComponent, HomeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
