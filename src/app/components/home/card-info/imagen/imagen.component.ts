import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imagen',
  templateUrl: './imagen.component.html',
  styleUrls: ['./imagen.component.css']
})
export class ImagenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  imageSource:String="assets/images/serna.png"
}
