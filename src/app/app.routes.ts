import { Routes } from "@angular/router";
import { CertificateComponent } from "./components/certificate/certificate.component";
import { DevelopmentComponent } from "./components/development/development.component";
import { HomeComponent } from "./components/home/home.component";

export const ROUTES: Routes=[
    {path:'home',component:HomeComponent},
    {path:'development',component:DevelopmentComponent},
    {path:'certificate',component:CertificateComponent},
    // {path:'cartelera/**',component:SearchComponent},
    {path:'',pathMatch:'full',redirectTo:'home'},
    {path:'**',pathMatch:'full', redirectTo:'home'}
    
]