import { Component, OnInit } from '@angular/core';
import { NavbarService } from './navbar.service';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    animations: [
        trigger('myInsertRemoveTrigger', [
            transition(':enter', [
                style({ opacity: 0 }),
                animate('0.5s', style({ opacity: 1 })),
            ]),
            transition(':leave', [
                animate('0.5s', style({ opacity: 0 }))
            ])
        ]),
    ]
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
