import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"profile", component:ProfileComponent},
  {path:"registration", component:RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
export const RoutingComponent=[HomeComponent,ProfileComponent,RegistrationComponent]

