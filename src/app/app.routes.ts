import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LangingAboutComponent } from './langing-about/langing-about.component';
import { LangingActualityComponent } from './langing-actuality/langing-actuality.component';
import { LangingEventComponent } from './langing-event/langing-event.component';
import { DashbordAdminComponent } from './dashbord-admin/dashbord-admin.component';
import { CausesComponent } from './causes/causes.component';

export const routes: Routes = [
    {path: '', component: LandingPageComponent },
    {path:'about', component: LangingAboutComponent},
    {path:'actuality', component: LangingActualityComponent},
    {path: 'cause', component: LangingEventComponent},
    {path: 'admin',component: DashbordAdminComponent},
    {path: 'causes',component: CausesComponent}
];
 