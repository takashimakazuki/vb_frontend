import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  toggleSideBar$: EventEmitter<null> = new EventEmitter();

  sideBarContainPath: string[] = [
    '/match',
    '/match/list',
  ]
  constructor() { }
}
