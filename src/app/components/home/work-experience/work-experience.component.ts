import { Component, OnInit } from '@angular/core';
import { WorkExperience } from 'src/app/models/models';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {

  workExpList:WorkExperience[]=[
    {
      role:'Software Developer',
      company:'Celuweb',
      duration: 'Mar 2021 - Current',
      description: ['Worked in different tecnologies suech as (Java, Kotlin, Flutter)']
    },
    {
      role:'Software Developer',
      company:'Lavelo Pues',
      duration: 'Aug 2020-Mar 2021',
      description: ['Worked in different tecnologies suech as (PHP, Angular, React)']
    }

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
