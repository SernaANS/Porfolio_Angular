import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/models/models';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  educationList: Education[]=[
    {
      institute: 'Institucion Universitaria EAM',
      course: 'Software Enginner',
      duration: '2018-2023',
      score: '90%'
    },
    {
      institute: 'Udemy',
      course: 'Master en SQL Server',
      duration: '2023',
      score: '100%'
    },
    {
      institute: 'Udemy',
      course: 'Flutter Avanzado: Lleva tu conocimiento al siguiente nivel',
      duration: '2022',
      score: '100%'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
