import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {MaterialExampleModule} from '../material.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HomeComponent } from './home/home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MaterialExampleModule,  MatToolbarModule, MatIconModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
    ])
   ],
  declarations: [ AppComponent, ToolbarComponent, HomeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
