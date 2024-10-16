import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LangingAboutComponent } from './langing-about/langing-about.component';
import { LangingActualityComponent } from './langing-actuality/langing-actuality.component';
import { LangingEventComponent } from './langing-event/langing-event.component';

export const routes: Routes = [
    {path: '', component: LandingPageComponent },
    {path:'about', component: LangingAboutComponent},
    {path:'actuality', component: LangingActualityComponent},
    {path: 'cause', component: LangingEventComponent}
];
