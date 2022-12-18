import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/unrouted/navbar/navbar.component';
import { HomeComponent } from './component/routed/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { PaginationUnroutedComponent } from './component/unrouted/pagination-unrouted/pagination-unrouted.component';
import { DropdownRegisterPageComponent } from './component/unrouted/dropdown-register-page/dropdown-register-page.component';
import { SearchUnroutedComponent } from './component/unrouted/search-unrouted/search-unrouted.component';
//
import { ProfesoresPlistComponent } from './component/routed/profesor/profesor-plist/profesor-plist.component';
import { ProfesorDetailComponent } from './component/unrouted/component-detail/profesor-detail/profesor-detail.component';
import { ProfesorViewComponent } from './component/routed/profesor/profesor-view/profesor-view.component';
import { ProfesorRemoveComponent } from './component/routed/profesor/profesor-remove/profesor-remove.component';
import { ProfesorCreateComponent } from './component/routed/profesor/profesor-create/profesor-create.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PaginationUnroutedComponent,
    DropdownRegisterPageComponent,
    SearchUnroutedComponent,
    ProfesoresPlistComponent,
    ProfesorDetailComponent,
    ProfesorViewComponent,
    ProfesorRemoveComponent,
    ProfesorCreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
