import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: DashboardComponent ,
        // children: [
        //     { path: 'uikit', loadChildren: () => import('./../uikit/uikit.module').then(m => m.UIkitModule) },
        //     { path: 'utilities', loadChildren: () => import('./../utilities/utilities.module').then(m => m.UtilitiesModule) },
        //     { path: 'documentation', loadChildren: () => import('./..//documentation/documentation.module').then(m => m.DocumentationModule) },
        //     { path: 'blocks', loadChildren: () => import('./../primeblocks/primeblocks.module').then(m => m.PrimeBlocksModule) },
        //     { path: 'pages', loadChildren: () => import('./../pages/pages.module').then(m => m.PagesModule) }
        // ]
    }
    ])],
    exports: [RouterModule]
})
export class DashboardsRoutingModule { }
