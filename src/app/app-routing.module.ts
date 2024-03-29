import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/routed/home/home.component';
import { ProfesoresPlistComponent } from './component/routed/profesor/profesor-plist/profesor-plist.component';
import { ProfesorViewComponent } from './component/routed/profesor/profesor-view/profesor-view.component';
import { ProfesorRemoveComponent } from './component/routed/profesor/profesor-remove/profesor-remove.component';
import { ProfesorNewComponent } from './component/routed/profesor/profesor-new/profesor-new.component';
import { ProfesorEditComponent } from './component/routed/profesor/profesor-edit/profesor-edit.component';
import { LoginComponent } from './component/routed/session/login/login.component';
import { LogoutComponent } from './component/routed/session/logout/logout.component';
import { AsignaturaPlistComponent } from './component/routed/asignatura/asignatura-plist/asignatura-plist.component';
import { AsignaturaViewComponent } from './component/routed/asignatura/asignatura-view/asignatura-view.component';
import { AsignaturaNewComponent } from './component/routed/asignatura/asignatura-new/asignatura-new.component';
import { AsignaturaRemoveComponent } from './component/routed/asignatura/asignatura-remove/asignatura-remove.component';
import { AsignaturaEditComponent } from './component/routed/asignatura/asignatura-edit/asignatura-edit.component';
import { GeneradorComponent } from './component/routed/generador/generador.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent},
  { path: 'generador', component: GeneradorComponent },
  { path: 'profesores', component: ProfesoresPlistComponent },
  { path: 'profesor/new', component: ProfesorNewComponent },
  { path: 'profesor/:id/view', component: ProfesorViewComponent },
  { path: 'profesor/:id/remove', component: ProfesorRemoveComponent },
  { path: 'profesor/:id/edit', component: ProfesorEditComponent },
  { path: 'asignaturas', component: AsignaturaPlistComponent },
  { path: 'asignatura/new', component: AsignaturaNewComponent },
  { path: 'asignatura/:id/view', component: AsignaturaViewComponent },
  { path: 'asignatura/:id/remove', component: AsignaturaRemoveComponent },
  { path: 'asignatura/:id/edit', component: AsignaturaEditComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
