import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { CarsItemsListsComponent } from './cars-items-lists/cars-items-lists.component';
import { CarDetailsComponent } from './car-details/car-details.component';

const routes: Routes = [
  {path: "", component:WelcomeComponent, redirectTo:'', pathMatch: "full"},
  {path:"home", component:WelcomeComponent},
  {path:"cars", component:CarsItemsListsComponent},
  {path:"car-details/:type/:manufacturer/:model", component:CarDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routing = RouterModule.forRoot(routes);