import { Component, OnInit } from '@angular/core';
import { NavbarService } from './navbar.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
    constructor(private navBarService: NavbarService) { }

    toggleSideBar() {
        this.navBarService.toggleSideBar$.emit();
    }
}
