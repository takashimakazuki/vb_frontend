import { Component, OnInit } from '@angular/core';
import { NavbarService } from './navbar.service';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    hasHamburger: boolean;

    constructor(
        private navBarService: NavbarService,
        private router: Router,
    ) { }

    ngOnInit() {
        this.router.events.pipe(
            filter(value => !isNullOrUndefined(value['url']))
        ).subscribe(
            d => {
                if (this.navBarService.sideBarContainPath.includes(d['url'])) {
                    this.hasHamburger = true;
                } else {
                    this.hasHamburger = false;
                }
            }
        )
    }

    toggleSideBar() {
        this.navBarService.toggleSideBar$.emit();
    }
}
