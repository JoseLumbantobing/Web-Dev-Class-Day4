import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  // {
  //   path: '',
  // loadChildren: () => import('./app.module').then(m => m.AppModule)
  // },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'login',
  loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
