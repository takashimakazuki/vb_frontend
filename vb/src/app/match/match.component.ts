import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { NavbarService } from '../core/navbar/navbar.service';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent implements OnInit {
  @ViewChild('sidenav', null) sidenav;

  constructor(
    private navBarService: NavbarService,
  ) { }

  ngOnInit() {
    this.navBarService.toggleSideBar$.subscribe(_ => {
      this.sidenav.toggle();
    })
  }

}
