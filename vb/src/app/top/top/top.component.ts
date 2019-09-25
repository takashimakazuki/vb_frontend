import { Component, OnInit, ElementRef } from '@angular/core';
import { MatchService } from 'src/app/core/services/match.service';
import { Match } from 'src/app/core/models/match';
import { QueryParams } from 'src/app/core/models/query-params';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {
  matches: Match[];
  private _el: HTMLElement;
  query: QueryParams = {
    'page': String(1),
    'pagesize': String(2)
  };

  constructor(
    private matchService: MatchService,
    el: ElementRef,
  ) {
    this._el = el.nativeElement;
  }

  ngOnInit() {
    this.matchService.getMatches(this.query).subscribe(matches => {
      this.matches = matches;
    });
    setTimeout(() => {
      const list = this._el.getElementsByTagName('img');
      for (let i = 0; i < list.length; i++) {
        // TODO: 写真のサイズ変更はバックエンドでする？
        list.item(i).width = 400;
      }
    }, 100);

  }
}
