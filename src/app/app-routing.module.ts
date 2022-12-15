import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfesoresPlistComponent } from './component/routed/profesor/profesores-plist/profesores-plist.component';
import { HomeComponent } from './component/routed/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'teachers', component: ProfesoresPlistComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
