import { Routes } from "@angular/router";
import { HomeComponent } from "./component/home/home.component";


export const ROUTES: Routes=[
    {path:'home',component:HomeComponent},
    //{path:'development',component:DevelopmentComponent},
    //{path:'certificate',component:CertificateComponent},
    // {path:'cartelera/**',component:SearchComponent},
    {path:'',pathMatch:'full',redirectTo:'home'},
    {path:'**',pathMatch:'full', redirectTo:'home'}
    
]