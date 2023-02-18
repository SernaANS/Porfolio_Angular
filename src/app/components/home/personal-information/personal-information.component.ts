import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent implements OnInit {

  myData: String[][]=[
    ['Name', 'Santiago Serna'],
    ['DOB','05/10/2000'],
    ['Work Exp','2 years'],
    ['Education','Software Enginner'],
    ['Interests','Rugby']
  ]

  aboutMe: string[]=[
    'Hi,  I am a Software Enginner with 2 years of experience  in software industry',
    'Worked as developer of mobile in different technologies( Flutter, Java, Kotlin)',
    'also worked as developer of fullstack in PHP(CodeIgniter) and Angular ',
    'but I want to be developer of backend in JAVA whit SpringBoot or other technologies'

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
