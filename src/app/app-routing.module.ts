import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { DetailsguardGuard } from './detailsguard.guard';
import { HomeComponent } from './home/home.component';
import { WizardListComponent } from './wizard-list/wizard-list.component';

const routes: Routes = [
  { path: 'wizard-details', component: DetailsComponent,canActivate : [DetailsguardGuard] },
  { path: 'wizard-list', component: WizardListComponent },
  { path: 'home', component: HomeComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
