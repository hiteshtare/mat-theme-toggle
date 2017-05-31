import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // animations modules

import { MaterialModule } from '@angular/material';

import { AppComponent, DialogContentComponent } from './app.component';
import { DemoComponent } from './scss/demo/demo.component';
import { appRoutingProviders, routing } from 'app/app.routing';
import { ThemetoggleComponent } from './scss/themetoggle/themetoggle.component';

@NgModule({
  declarations: [
    AppComponent, DialogContentComponent, DemoComponent, ThemetoggleComponent],
  entryComponents: [DialogContentComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
