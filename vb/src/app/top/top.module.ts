import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopComponent } from './top/top.component';
import { TopRoutingModule } from './top-routing.module';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [TopComponent],
  imports: [
    CommonModule,
    TopRoutingModule,
    CoreModule,
  ]
})
export class TopModule { }
