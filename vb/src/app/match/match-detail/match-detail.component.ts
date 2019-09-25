import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchService } from 'src/app/core/services/match.service';
import { Match } from 'src/app/core/models/match';

@Component({
  selector: 'app-match-detail',
  templateUrl: './match-detail.component.html',
  styleUrls: ['./match-detail.component.scss']
})
export class MatchDetailComponent implements OnInit {
  match: Match;

  constructor(
    private actRoute: ActivatedRoute,
    private matchService: MatchService,
  ) { }

  ngOnInit() {
    const id = parseInt(this.actRoute.snapshot.paramMap.get('id'), 10);
    this.matchService.getMatch(id).subscribe(
      match => {
        this.match = match;
        console.log(this.match)
      }
    )
  }

}
