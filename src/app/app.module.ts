import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import{ROUTES} from './app.routes';
import { RouterModule} from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { HeaderComponent } from './component/home/header/header.component';
import { BanerComponent } from './component/home/baner/baner.component';
import { AboutComponent } from './component/home/about/about.component';
import { SkillsComponent } from './component/home/skills/skills.component';
import { QualificationComponent } from './component/home/qualification/qualification.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    BanerComponent,
    AboutComponent,
    SkillsComponent,
    QualificationComponent,

  ],
  imports: [
    BrowserModule,
    
    //ROUTES
    AppRoutingModule,
    RouterModule.forRoot( ROUTES ,{useHash:true}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
