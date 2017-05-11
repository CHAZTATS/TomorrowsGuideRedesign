import { HomeComponent } from './home/home.component';
import {Routes, RouterModule, ExtraOptions} from '@angular/router';
import {AppComponent} from "./app.component";
import { ModuleWithProviders } from "@angular/core";
import { CareProviderComponent } from "app/care-provider/care-provider.component";
import { SupplierComponent } from "app/supplier/supplier.component";

const appRoutes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent, data: {title: 'Home'}},
    {path: 'care-provider', component: CareProviderComponent, data: {title: 'CareProvider'}},
    {path: 'supplier', component: SupplierComponent, data: {title: 'Supplier'}}
];

export const appRoutingProviders: any[] = [];
export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });
