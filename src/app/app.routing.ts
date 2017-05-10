import { HomeComponent } from './home/home.component';
import {Routes, RouterModule, ExtraOptions} from '@angular/router';
import {AppComponent} from "./app.component";
import { ModuleWithProviders } from "@angular/core";

const appRoutes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent, data: {title: 'Home'}},
];

export const appRoutingProviders: any[] = [];
export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });
