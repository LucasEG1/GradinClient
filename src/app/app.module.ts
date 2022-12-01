import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/unrouted/navbar/navbar.component';
import { TeachersPlistComponent } from './component/routed/teacher/teachers-plist/teachers-plist.component';
import { HomeComponent } from './component/routed/home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TeachersPlistComponent,
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
