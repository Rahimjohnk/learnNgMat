import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './authorization/auth/auth.component';
import { AuthGuardService } from './authorization/services/guard/auth-guard.service';
import { LoggedInGuard } from './authorization/services/guard/logged-in.guard';
import { DashBoardComponent } from './dash-board/dash-board.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashBoard',
    pathMatch: 'full',
  },
  {
    path: 'dashBoard',
    component: DashBoardComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'auth',
    component: AuthComponent,
    canActivate: [LoggedInGuard]
  },
  { path: '**', redirectTo: '/dashBoard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
