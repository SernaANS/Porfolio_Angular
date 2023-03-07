import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import{ROUTES} from './app.routes';
import { RouterModule} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { HomeComponent } from './component/home/home.component';
import { HeaderComponent } from './component/home/header/header.component';
import { BanerComponent } from './component/home/baner/baner.component';
import { AboutComponent } from './component/home/about/about.component';
import { SkillsComponent } from './component/home/skills/skills.component';
import { QualificationComponent } from './component/home/qualification/qualification.component';
import { FooterComponent } from './component/home/footer/footer.component';
import { ScrollupComponent } from './component/home/scrollup/scrollup.component';
import { CarouselModule } from './component/home/carousel/carousel.module';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    BanerComponent,
    AboutComponent,
    SkillsComponent,
    QualificationComponent,
    FooterComponent,
    ScrollupComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    //ROUTES
    AppRoutingModule,
    RouterModule.forRoot( ROUTES ,{useHash:true}),
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
