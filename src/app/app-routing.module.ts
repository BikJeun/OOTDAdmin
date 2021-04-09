import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ViewAllMealsComponent } from './view-all-meals/view-all-meals.component'
import { IndexComponent } from "./index/index.component";
import { CreateNewMealComponent } from './create-new-meal/create-new-meal.component'
import { ViewAllStaffComponent } from './view-all-staff/view-all-staff.component';
import { AccessRightErrorComponent } from './access-right-error/access-right-error.component';
import { OTUserComponent } from './otuser/otuser.component';
import { ViewAllReviewsComponent } from './view-all-reviews/view-all-reviews.component';
import { ViewAllSalesTransactionComponent } from './view-all-sales-transaction/view-all-sales-transaction.component';

import { ViewAllPromoCodeComponent } from './view-all-promo-code/view-all-promo-code.component';

import { ViewAllDriversComponent } from './view-all-drivers/view-all-drivers.component';
import { ViewAllIngredientComponent } from './view-all-ingredient/view-all-ingredient.component';
import { ReportGenerationComponent } from './report-generation/report-generation.component';



const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'accessRightError', component: AccessRightErrorComponent },
  { path: 'index', component: IndexComponent },
  { path: 'main-page', component: MainPageComponent },
  { path: 'bentoManagement', component: ViewAllMealsComponent },
  { path: 'createNewMeal', component: CreateNewMealComponent },
  { path: 'staffManagement', component: ViewAllStaffComponent },
  { path: 'user-management', component: OTUserComponent },
  { path: 'reviewManagement', component: ViewAllReviewsComponent },
  { path: 'salesTransactionManagement', component: ViewAllSalesTransactionComponent },
  { path: 'promoManagement', component: ViewAllPromoCodeComponent },
  { path: 'driverManagement', component: ViewAllDriversComponent },
  { path: 'ingredientMangement', component: ViewAllIngredientComponent },
  { path: 'report-generation', component: ReportGenerationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }