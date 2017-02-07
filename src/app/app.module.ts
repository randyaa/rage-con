import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '@angular/material';

import 'hammerjs';

import { AppComponent } from './app.component';
import { SponsorsComponent } from "./sponsors/sponsors.component";
import { EventsComponent } from "./events/events.component";
import { AboutComponent } from "./about/about.component";
import { StaffComponent } from "./staff/staff.component";
import { StaffMemberComponent } from './staff-member/staff-member.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    EventsComponent,
    SponsorsComponent,
    StaffComponent,
    StaffMemberComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
