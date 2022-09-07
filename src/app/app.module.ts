import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersonModule } from './person/person.module';
import { canDeActivatePersonService } from './services/canDeactivate.person.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PersonModule
  ],
  providers: [canDeActivatePersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
