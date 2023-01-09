import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PaginationUnroutedComponent } from './component/unrouted/pagination-unrouted/pagination-unrouted.component';
import { DropdownRegisterPageComponent } from './component/unrouted/dropdown-register-page/dropdown-register-page.component';
import { SearchUnroutedComponent } from './component/unrouted/search-unrouted/search-unrouted.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CryptoService } from './service/crypto.service';
import { PaginationService } from './service/pagination.service';
import { DecodeService } from './service/decode.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//
import { HomeComponent } from './component/routed/home/home.component';
import { NavbarComponent } from './component/unrouted/navbar/navbar.component';
import { LoginComponent } from './component/routed/session/login/login.component';
import { LogoutComponent } from './component/routed/session/logout/logout.component';
//
import { ProfesoresPlistComponent } from './component/routed/profesor/profesor-plist/profesor-plist.component';
import { ProfesorDetailComponent } from './component/unrouted/component-detail/profesor-detail/profesor-detail.component';
import { ProfesorNewComponent } from './component/routed/profesor/profesor-new/profesor-new.component';
import { ProfesorViewComponent } from './component/routed/profesor/profesor-view/profesor-view.component';
import { ProfesorRemoveComponent } from './component/routed/profesor/profesor-remove/profesor-remove.component';
import { ProfesorEditComponent } from './component/routed/profesor/profesor-edit/profesor-edit.component';
import { ProfesorFinderComponent } from './component/unrouted/profesor-finder/profesor-finder.component';
//
import { AsignaturaPlistComponent } from './component/routed/asignatura/asignatura-plist/asignatura-plist.component';
import { AsignaturaDetailComponent } from './component/unrouted/component-detail/asignatura-detail/asignatura-detail.component';
import { AsignaturaViewComponent } from './component/routed/asignatura/asignatura-view/asignatura-view.component';
import { AsignaturaNewComponent } from './component/routed/asignatura/asignatura-new/asignatura-new.component';
import { AsignaturaRemoveComponent } from './component/routed/asignatura/asignatura-remove/asignatura-remove.component';
import { AsignaturaFinderComponent } from './component/unrouted/asignatura-finder/asignatura-finder.component';
import { AsignaturaEditComponent } from './component/routed/asignatura/asignatura-edit/asignatura-edit.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PaginationUnroutedComponent,
    DropdownRegisterPageComponent,
    SearchUnroutedComponent,
    LoginComponent,
    LogoutComponent,
    ProfesoresPlistComponent,
    ProfesorDetailComponent,
    ProfesorNewComponent,
    ProfesorViewComponent,
    ProfesorRemoveComponent,
    ProfesorEditComponent,
    ProfesorFinderComponent,
    AsignaturaPlistComponent,
    AsignaturaDetailComponent,
    AsignaturaViewComponent,
    AsignaturaFinderComponent,
    AsignaturaNewComponent,
    AsignaturaRemoveComponent,
    AsignaturaEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
    MatPaginatorModule,
    BrowserAnimationsModule
  ],
  providers: [
    CryptoService,
    DecodeService,
    PaginationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
