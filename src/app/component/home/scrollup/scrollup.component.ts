import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-scrollup',
  templateUrl: './scrollup.component.html',
  styleUrls: ['./scrollup.component.css']
})
export class ScrollupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isShow: boolean=false;
  topPosToStartShowing = 700;

  @HostListener('window:scroll')
  checkScroll() {
      
    // window의 scroll top
    // Both window.pageYOffset and document.documentElement.scrollTop returns the same result in all the cases. window.pageYOffset is not supported below IE 9.

    const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;

    console.log('[scroll]', scrollPosition);
    
    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

}
