import { Routes } from '@angular/router';
import { PageAboutComponent } from './page-about/page-about.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PageEventComponent } from './page-event/page-event.component';

export const routes: Routes = [
    {path: 'pageAbout', component: PageAboutComponent},
    {path: '', component: LandingPageComponent},
    {path: 'pageEvent', component: PageEventComponent }
];
