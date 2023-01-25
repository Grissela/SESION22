import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { AddproductoComponent } from './pages/addproducto/addproducto.component';

const routes: Routes = [
    {path:'login', component:LoginComponent},
    {path:'register', component:RegisterComponent},
    {path:'home', component:HomeComponent, ...canActivate(()=> redirectUnauthorizedTo(['/login']))},
    {path:'agregar', component:AddproductoComponent},
    {path:'', pathMatch:'full', redirectTo:'/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
