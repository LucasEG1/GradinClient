import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/unrouted/navbar/navbar.component';
import { TeachersPlistComponent } from './component/routed/teachers-plist/teachers-plist.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TeachersPlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
