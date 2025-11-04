import { Routes } from '@angular/router';

export const routes: Routes = [

    // basic routes redirec

    {
        path:'',redirectTo:'home',pathMatch:'full'
    },

    // lazy loading
    {
        path:'home',
        loadComponent() {
          return import('./pages/home/home.component').then(
            (e)=>e.HomeComponent
          )
        },
    },{
        path:'about-us',
        loadComponent() {
            return import('./pages/about/about.component').then(
                (e)=>e.AboutComponent
            )
        },
    },
    {
        path:'contact-us',
        loadComponent() {
            return import('./pages/conatctus/conatctus.component').then(
                (e)=>e.ConatctusComponent
            )
        },
    },

    // wild card routes
    {
        path:'**',redirectTo:'home'
    }
];
