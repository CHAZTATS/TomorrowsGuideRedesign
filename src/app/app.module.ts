import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { Routing, appRoutingProviders } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TopNavComponent } from "./topnav/topnav.component";
import { FooterComponent } from "./footer/footer.component";
import { CareProviderComponent } from "./care-provider/care-provider.component";
import { CareProviderNavComponent } from "app/care-provider/care-provider-nav/care-provider-nav.component";
import { CareProviderServicesComponent } from "app/care-provider/care-provider-services/care-provider-services.component";
import { CareProviderFeaturesComponent } from "app/care-provider/care-provider-features/care-provider-features.component";
import { CareProviderAdvertisementComponent } from './care-provider/care-provider-advertisement/care-provider-advertisement.component';
import { CareProviderCvSearchComponent } from './care-provider/care-provider-cv-search/care-provider-cv-search.component';
import { SupplierComponent } from './supplier/supplier.component';
import { SupplierNavComponent } from './supplier/supplier-nav/supplier-nav.component';
import { SupplierServicesComponent } from './supplier/supplier-services/supplier-services.component';
import { SupplierFeaturesComponent } from './supplier/supplier-features/supplier-features.component';
import { SupplierAdvertisementComponent } from './supplier/supplier-advertisement/supplier-advertisement.component';
import { SupplierRecruitmentComponent } from './supplier/supplier-recruitment/supplier-recruitment.component';
import { SupplierCvSearchComponent } from './supplier/supplier-cv-search/supplier-cv-search.component';
import { SupplierPropertyComponent } from './supplier/supplier-property/supplier-property.component';
import { SupplierTrainingComponent } from './supplier/supplier-training/supplier-training.component';
import { SupplierDataComponent } from './supplier/supplier-data/supplier-data.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopNavComponent,
    FooterComponent,
    CareProviderComponent,
    CareProviderNavComponent,
    CareProviderServicesComponent,
    CareProviderFeaturesComponent,
    CareProviderAdvertisementComponent,
    CareProviderCvSearchComponent,
    SupplierComponent,
    SupplierNavComponent,
    SupplierServicesComponent,
    SupplierFeaturesComponent,
    SupplierAdvertisementComponent,
    SupplierRecruitmentComponent,
    SupplierCvSearchComponent,
    SupplierPropertyComponent,
    SupplierTrainingComponent,
    SupplierDataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
