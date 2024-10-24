import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/pages/landing-page/landing-page.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { HomeDashboardComponent } from './components/pages/dashboard/home-dashboard/home-dashboard.component';
import { CalendarDashboardComponent } from './components/pages/dashboard/calendar-dashboard/calendar-dashboard.component';
import { WorkDashboardComponent } from './components/pages/dashboard/work-dashboard/work-dashboard.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';

export const routes: Routes = [{path: '', redirectTo:'home', pathMatch:"full"},
    {path: 'home', component: LandingPageComponent},
    {path: 'dashboard', component: DashboardComponent, children:[
        {path: '', component:HomeDashboardComponent},
        {path: 'calendar', component:CalendarDashboardComponent},
        {path: 'work', component:WorkDashboardComponent}
    ]},
    {path: 'login', component:LoginPageComponent},
    {path: 'register',component:RegisterPageComponent},
    {path: "**", component:NotFoundComponent}
];
