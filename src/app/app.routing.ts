import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from "app/app.component";
import { DemoComponent } from "app/scss/demo/demo.component";
import { ThemetoggleComponent } from "app/scss/themetoggle/themetoggle.component";

const appRoutes: Routes = [
    { path: '', redirectTo: 'demo', pathMatch: 'full' },
    { path: 'app', component: AppComponent },
    { path: 'demo', component: DemoComponent },
    { path: 'theme', component: ThemetoggleComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });
