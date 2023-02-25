import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @HostBinding('class.active') toggle: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleNavbar() {
    this.toggle = !this.toggle;
  }

}
