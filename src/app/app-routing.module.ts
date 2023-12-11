import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompteListComponent } from './compte-list/compte-list.component';
import { CreateCompteComponent } from './create-compte/create-compte.component';
import { UpdateCompteComponent } from './update-compte/update-compte.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'comptes', component:CompteListComponent},
  {path:'create-compte',component:CreateCompteComponent},
  {path:'', redirectTo:'comptes',pathMatch:'full'},
  {path:'update-compte/:id',component:UpdateCompteComponent},
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
