import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { UpdateComponent } from '../update/update.component';
import { AddComponent } from '../add/add.component';

const routes: Routes = [
  {path: '', component: ProfileComponent},
  // {path: ':id', component: ProfileComponent},
  {path: 'add', component: AddComponent},
  {path: 'update', component: UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
