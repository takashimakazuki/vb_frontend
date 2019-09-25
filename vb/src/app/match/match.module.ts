import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchComponent } from './match.component';
import { MatchRoutingModule } from './match-routing.module';
import { MatchListComponent } from './match-list/match-list.component';
import { CoreModule } from '../core/core.module';
import { MatchCreateComponent } from './match-create/match-create.component';
import { MatchDetailComponent } from './match-detail/match-detail.component';

@NgModule({
  declarations: [MatchComponent, MatchListComponent, MatchCreateComponent, MatchDetailComponent],
  imports: [
    CommonModule,
    MatchRoutingModule,
    CoreModule,
  ]
})
export class MatchModule { }
