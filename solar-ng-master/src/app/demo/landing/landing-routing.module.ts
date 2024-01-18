import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LandingComponent } from './landing.component';
import { ContactUsComponent } from './landing-components/contact-us/contact-us.component';
import { AboutComponent } from './landing-components/about/about.component';
import { ProjectComponent } from './landing-components/project/project.component';
import { ServiceComponent } from './landing-components/service/service.component';
import { HomeComponent } from './landing-components/home/home.component';

@NgModule({
    imports: [RouterModule.forChild([
        {
            path: '', component: LandingComponent,
            children: [
                { path: '', component: HomeComponent },
                { path: 'contact', component: ContactUsComponent },
                { path: 'about', component: AboutComponent },
                { path: 'projects', component: ProjectComponent },
                { path: 'service', component: ServiceComponent }
            ]
        }
    ])],
    exports: [RouterModule]
})
export class LandingRoutingModule { }
