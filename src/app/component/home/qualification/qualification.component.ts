import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.css']
})
export class QualificationComponent implements OnInit {


  @HostBinding('class.active') toggle: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  toggleSelection(selec:number) {
    this.toggle = selec;
  }
}
