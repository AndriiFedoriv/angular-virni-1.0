import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';

import {MaterialExampleModule} from '../material.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HomeComponent } from './home/home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatNativeDateModule} from '@angular/material/core';
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule, FormsModule, MaterialExampleModule,  MatToolbarModule, MatIconModule, ReactiveFormsModule, MatNativeDateModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
    ])
   ],
  declarations: [ AppComponent, ToolbarComponent, HomeComponent, ProductDetailsComponent ],
  bootstrap:    [ AppComponent, ToolbarComponent ]
})
export class AppModule { }
