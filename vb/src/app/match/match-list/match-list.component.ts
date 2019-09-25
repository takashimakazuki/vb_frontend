import { Component, OnInit, ElementRef } from '@angular/core';
import { Match } from 'src/app/core/models/match';
import { QueryParams } from 'src/app/core/models/query-params';
import { MatchService } from 'src/app/core/services/match.service';

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.scss']
})
export class MatchListComponent implements OnInit {
  matches: Match[];
  private _el: HTMLElement;
  query: QueryParams = {
    'page': String(1),
    'pagesize': String(12)
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
        const w = list.item(i).width;
        const h = list.item(i).height;

        list.item(i).width = 400;
        list.item(i).height = h * (list.item(i).width / w);

      }
    }, 300);

  }
}
