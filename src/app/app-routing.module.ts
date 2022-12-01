import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeachersPlistComponent } from './component/routed/teachers-plist/teachers-plist.component';

const routes: Routes = [
  {path: 'teachers', component: TeachersPlistComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
