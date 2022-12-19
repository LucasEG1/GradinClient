import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/routed/home/home.component';
import { ProfesoresPlistComponent } from './component/routed/profesor/profesor-plist/profesor-plist.component';
import { ProfesorViewComponent } from './component/routed/profesor/profesor-view/profesor-view.component';
import { ProfesorRemoveComponent } from './component/routed/profesor/profesor-remove/profesor-remove.component';
import { ProfesorNewComponent } from './component/routed/profesor/profesor-new/profesor-new.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profesores', component: ProfesoresPlistComponent },
  { path: 'profesor/new', component: ProfesorNewComponent },
  { path: 'profesor/:id/view', component: ProfesorViewComponent },
  { path: 'profesor/:id/remove', component: ProfesorRemoveComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
