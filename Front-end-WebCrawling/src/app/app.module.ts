import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {   HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
;
import { DataTablesModule } from 'angular-datatables';
import { NgImageSliderModule } from 'ng-image-slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

import {  HTTP_INTERCEPTORS } from '@angular/common/http';
import { TvComponent } from './tv/tv.component';
import { MatMenuModule } from '@angular/material/menu';
import { RefrigerateurComponent } from './refrigerateur/refrigerateur.component';
import { TabletteComponent } from './tablette/tablette.component';
import { OrdinateurComponent } from './ordinateur/ordinateur.component';
import { MaquillageComponent } from './maquillage/maquillage.component';
import { IphoneComponent } from './iphone/iphone.component';

@NgModule({
  declarations: [
    AppComponent,
   
    HomeComponent,
    TvComponent,
    RefrigerateurComponent,
    TabletteComponent,
    OrdinateurComponent,
    MaquillageComponent,
    IphoneComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    DataTablesModule,
    NgImageSliderModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatMenuModule
    
  
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
