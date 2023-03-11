import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from '../authorization/auth/auth.component';
import { AuthGuardService } from '../authorization/services/guard/auth-guard.service';
import { DashBoardComponent } from '../dash-board/dash-board.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/dashBoard',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    component: AuthComponent,
  },
  {
    path: 'dashBoard',
    component: DashBoardComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: '**',
    redirectTo: '/dashBoard',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
