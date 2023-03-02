import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  aboutImg:string="../../../../assets/images/santiago.png";
  cv_pdf:string="../../../../assets/file/HOJA_DE_VIDA.pdf";

  constructor() { }

  ngOnInit(): void {
  }

}
