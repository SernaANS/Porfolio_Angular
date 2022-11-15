import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import{ROUTES} from './app.routes';
import { RouterModule} from '@angular/router';
import { NavegationComponent } from './components/shared/navegation/navegation.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule} from '@angular/material/list';
import { MatIconModule} from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';
import { PortafolioComponent } from './components/home/portafolio/portafolio.component';
import { CardInfoComponent } from './components/home/card-info/card-info.component';
import { ImagenComponent } from './components/home/card-info/imagen/imagen.component';
import { InformationComponent } from './components/home/card-info/information/information.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegationComponent,
    HomeComponent,
    PortafolioComponent,
    CardInfoComponent,
    ImagenComponent,
    InformationComponent
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
