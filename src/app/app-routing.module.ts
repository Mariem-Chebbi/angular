import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ResidencesComponent } from './residences/residences.component';
import { CardResidenceComponent } from './card-residence/card-residence.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ShowappartmentComponent } from './showappartment/showappartment.component';
import { AnnanceComponent } from './annance/annance.component';

const ROUTES:Routes=[
  {path:'',redirectTo:'home',pathMatch:"full"},
  {path:'home',component:ResidencesComponent},
  {path:'card',component:CardResidenceComponent},
  {path:'card/showappartment/:id',component:ShowappartmentComponent},
  {path:'**',component:PageNotFoundComponent}

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES),
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
