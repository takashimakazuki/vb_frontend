import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'top',
    loadChildren: './top/top.module#TopModule',
  },
  {
    path: 'match',
    loadChildren: './match/match.module#MatchModule',
  },
  // Infomation Moduleを追加
  // User Moduleを追加
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
