import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/pages/landing-page/landing-page.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';

export const routes: Routes = [{path: '', redirectTo:'home', pathMatch:"full"},
    {path: 'home', component: LandingPageComponent},
    {path: "**", component:NotFoundComponent}
];
