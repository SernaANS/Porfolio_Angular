import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navegation',
  templateUrl: './navegation.component.html',
  styleUrls: ['./navegation.component.css']
})
export class NavegationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  
  toggleMenu():void{
    var toggle=document.querySelector('.toggle')!;
    var menu=document.querySelector('.menu')!;
    console.log("hola")
    console.log(toggle)
      if(menu?.classList.contains('active')){
        menu.classList.remove("active")
        toggle!.querySelector("mat-icon")!.innerHTML="<mat-icon>menu</mat-icon>";
        return;
      }

      
     menu?.classList.add("active")
     toggle!.querySelector("mat-icon")!.innerHTML="<mat-icon>close</mat-icon>";
  }

}
