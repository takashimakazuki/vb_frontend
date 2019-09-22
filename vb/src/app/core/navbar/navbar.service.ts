import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  toggleSideBar$: EventEmitter<null> = new EventEmitter();
  constructor() { }
}
