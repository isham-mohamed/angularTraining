import { Page404Component } from './page404/page404.component';
import { CompaniesComponent } from './companies/companies.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeviceDetailsComponent } from './device-details/device-details.component';
import { DevicesComponent } from './devices/devices.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'companies',
    component:CompaniesComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'device',
    component:DevicesComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'device/:deviceId',
    component:DeviceDetailsComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'**',
    component:Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
