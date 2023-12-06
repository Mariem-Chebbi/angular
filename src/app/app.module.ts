import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResidencesComponent } from './residences/residences.component';
import { RouterModule, Routes } from '@angular/router';
import { CardResidenceComponent } from './card-residence/card-residence.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { ShowappartmentComponent } from './showappartment/showappartment.component';
import { AnnanceComponent } from './annance/annance.component';
import { ListAnnanceComponent } from './annance/list-annance/list-annance.component';
import { AnnanceRoutingModule } from './annance/annance-routing.module';
import { AnnanceModule } from './annance/annance.module';
import { FormAppartmentComponent } from './form-appartment/form-appartment.component';
import { ListAppartmentComponent } from './shared/list-appartment/list-appartment.component';
import { AddAppartmentComponent } from './shared/add-appartment/add-appartment.component';
import { AppartmentComponent } from './appartment/appartment.component';
import { UpdateAppartmentComponent } from './update-appartment/update-appartment.component';
import { ErrorsComponent } from './shared/errors/errors.component';
//import { TestComponent } from './test.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ResidencesComponent,
    CardResidenceComponent,
    PageNotFoundComponent,
    ShowappartmentComponent,
    FormAppartmentComponent,
    ListAppartmentComponent,
    AddAppartmentComponent,
    AppartmentComponent,
    UpdateAppartmentComponent,
    ErrorsComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AnnanceModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
