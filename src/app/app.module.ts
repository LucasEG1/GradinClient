import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/unrouted/navbar/navbar.component';
import { ProfesoresPlistComponent } from './component/routed/profesor/profesores-plist/profesores-plist.component';
import { HomeComponent } from './component/routed/home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProfesoresPlistComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
