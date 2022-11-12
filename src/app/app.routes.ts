import { Routes } from "@angular/router";

export const ROUTES: Routes=[
    // {path:'home',component:HomeComponent},
    // {path:'search',component:SearchComponent},
    // {path:'cartelera',component:CarteleraComponent},
    // {path:'cartelera/**',component:SearchComponent},
    {path:'',pathMatch:'full',redirectTo:'home'},
    {path:'**',pathMatch:'full', redirectTo:'home'}
    
]