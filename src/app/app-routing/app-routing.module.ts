import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from '../dash-board/dash-board.component';

const appRoutes: Routes = [
  { 
    path: '',  redirectTo:'/dashBoard', pathMatch: 'full'
  },
  {
    path:'dashBoard', component: DashBoardComponent
  }
];


@NgModule({ 
  imports: [
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
