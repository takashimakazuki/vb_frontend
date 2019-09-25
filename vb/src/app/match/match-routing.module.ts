import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MatchComponent } from './match.component';
import { MatchListComponent } from './match-list/match-list.component';
import { MatchCreateComponent } from './match-create/match-create.component';
import { MatchDetailComponent } from './match-detail/match-detail.component';

const routes: Routes = [
  {
    path: '', component: MatchComponent,
    children: [
      { path: 'list', component: MatchListComponent },
      { path: 'create', component: MatchCreateComponent },
      { path: 'detail/:id', component: MatchDetailComponent },
    ]
  }
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ]
})
export class MatchRoutingModule { }
