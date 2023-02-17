import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import{ROUTES} from './app.routes';
import { RouterModule} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule} from '@angular/material/list';
import { MatIconModule} from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';
import { BanerComponent } from './components/home/baner/baner.component';
import { PersonalInformationComponent } from './components/home/personal-information/personal-information.component';
import { EducationComponent } from './components/home/education/education.component';
import { WorkExperienceComponent } from './components/home/work-experience/work-experience.component';
import { SkillsComponent } from './components/home/skills/skills.component';
import { ContactsComponent } from './components/home/contacts/contacts.component';
import { ProjectsComponent } from './components/home/projects/projects.component';
import { ResponsiveDirective } from './components/home/directives/responsive.directive';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BanerComponent,
    PersonalInformationComponent,
    EducationComponent,
    WorkExperienceComponent,
    SkillsComponent,
    ContactsComponent,
    ProjectsComponent,
    ResponsiveDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    
    //ROUTES
    AppRoutingModule,
    RouterModule.forRoot( ROUTES ,{useHash:true}),
    
    //MATERIAL
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
